const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const _ = require('lodash');

const dir = '../../data/';
// loadStocks asyncronously returns all stocks found in the data folder dynamically
function loadStocks(callback) {
  // stocks will be a hashmap of stock ticker data
  const stocks = {};
  // I used count to wait until all csv files were parsed
  let count = 0;
  fs.readdir(path.resolve(__dirname, dir), function(err, filenames) {
    if (err) {
      console.error('error loading stocks:\n' + err);
      callback(err, null);
    } else {
      filenames.forEach(function(file) {
        const splitName = file.split('.');
        // check if the file is actually a csv before parsing it
        if (splitName[1] === 'csv') {
          const name = splitName[0];
          const collection = [];
          csv().fromFile(path.resolve(__dirname, dir, file))
          .on('json', function(json) {
            // push each parsed row to the collection
            collection.push(json);
          })
          .on('done', function (error) {
            if (error) {
              console.error('error parsing ' + name + ':\n' + err);
              callback(error, null);
            }
            // sort the collection by date
            const sortedCollection = _.sortBy(collection, 'Date');
            // convert collect to a single collection of arrays
            let arrays = {};
            let keys = Object.keys(sortedCollection[0]);
            keys.forEach(key => {
              arrays[key] = sortedCollection.map((item) => {
                if (key === 'Close') {
                  return Number(item[key]);
                } else {
                  return item[key]
                }
              });
            });
            // save arrays collection on the company name key
            stocks[name] = arrays;
            count++;
            // if count is equal to the length of files, invoke our callback
            if (count === filenames.length) {
              callback(null, stocks);
            }
          });
        }
      });
    }
  });
}

module.exports.loadStocks = loadStocks;

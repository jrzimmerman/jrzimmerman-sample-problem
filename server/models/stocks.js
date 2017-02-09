const fs = require('fs');
const path = require('path');
const csv = require('csv');
const _ = require('lodash');

const dir = '../../data/';
// loadStocks asyncronously returns all stocks found in the data folder dynamically
function loadStocks(callback) {
  // stocks will be out hashmap of stock ticker data
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
          // read in the file to be parsed as a string
          fs.readFile(path.resolve(__dirname, dir, file), 'utf-8', function (err, output) {
            // asycronously parse the file
            console.log('output: ', output);
            csv.parse(output, { delimiter: ',' }, function(err, data) {
              if (err) {
                console.error('error parsing ' + file + ':\n' + err);
                callback(err, null);
              } else {
                // dynamically pull the keys from the csv
                const keys = data[0];
                // create a collection of objects
                const collection = [];
                for (let i = 1; i < data.length; i++) {
                  const obj = {};
                  for (let j = 0; j < data[i]. length; j++) {
                    obj[keys[j]] = data[i][j];
                  }
                  collection.push(obj);
                }
                const sortedCollection = _.sortBy(collection, 'Date');
                stocks[name] = sortedCollection;
                count++;
                // if count is equal to the length of files, invoke our callback
                if (count === filenames.length) {
                  callback(null, stocks);
                }
              }
            });
          });
        }
      });
    }
  });
}

module.exports.loadStocks = loadStocks;

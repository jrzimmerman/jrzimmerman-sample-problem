const stocksModel = require('../models/stocks');
module.exports = function (app, express) {
  const router = express.Router();

  router.route('/stocks')
  .get(function (req, res) {
    stocksModel.loadStocks(function(err, data) {
      if (err) {
        res.send(400).json({
          error: err
        });
      } else {
        res.json(data);
      }
    });
  });

  return router;
};

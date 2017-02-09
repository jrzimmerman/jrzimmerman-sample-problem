const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8000;
const apiRoutes = require('../server/routes/api')(app, express);

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

// log all requests to console
app.use(morgan('dev'));

// serve front end
app.use(express.static('./dist'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'))
});

// api routes
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log('Server running on port ' + port)
});

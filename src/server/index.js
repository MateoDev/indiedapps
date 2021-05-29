/* eslint-disable global-require */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

if (['production'].includes(process.env.NODE_ENV)) {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '../../src/client/dist')));

  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../../src/client/dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
const express = require('express');
const path = require('path');
let port = process.env.PORT;

if (port == null || port === '') {
  port = 8000;
}

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log('listening on port ', port);
});

const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.listen(8080, () => {
  console.log('listening on port 8080!');
});

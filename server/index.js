const express = require('express');
const path = require('path');
let PORT = process.env.PORT || 3000;

if (port == null || port === '') {
  port = 8000;
}

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

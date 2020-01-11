const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const docsPath = path.resolve(__dirname, '../documentation');

const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Documentação
 * url: http://localhost:3000/
 */
app.use(express.static(docsPath));

app.use('/', routes.router);

app.listen(3000);
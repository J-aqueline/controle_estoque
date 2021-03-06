const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/routes'));

app.listen(process.env.PORT || 8080, "0.0.0.0");
console.log('Servidor está na porta 8080');


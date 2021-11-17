const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/routes'));

app.listen(3000);
console.log('Servidor está na porta 3000');


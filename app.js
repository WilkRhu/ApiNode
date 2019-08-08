const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');


//string de conexão 

const url = config.bd_string;
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true};

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados:' + err);
});
mongoose.connection.on('disconnected', () =>{
    console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', () =>{
    console.log('Aplicação Conectada ao banco de dados!');
});

//Configurar o body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users', userRoute);

//Porta
app.listen(3000);

//Exportação do app
module.exports = app;
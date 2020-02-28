const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const config = require('./config/config');

const url = "mongodb+srv://usuario_admin:111209@cluster0-qafht.mongodb.net/test?retryWrites=true&w=majority";
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
const userRoute = require('./routes/admins/users');
const alunoRoute = require('./routes/alunos/alunos');
const teacherRoute = require('./routes/teacher/teachers');
const aulasRoute =  require('./routes/aulas/aulas');

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/alunos', alunoRoute);
app.use('/teacher', teacherRoute);
app.use('/aulas', aulasRoute);
//Porta
app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000")
});

//Exportação do app
module.exports = app;
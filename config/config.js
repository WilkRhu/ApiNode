const env = process.env.NODE_ENV || 'dev';
const mongoose = require('mongoose');



//Resposnsável por indentificar os ambientes de desenvolvimento e trazer a conexão com o banco de dados
const config = () =>{
    switch (env) {
        case 'dev':
            return{
                bd_string: process.env.URL_DB
            }

        case 'html':
            return{
                bd_string: process.env.URL_DB
            }   
            
        case 'prod':
            return{
                bd_string: process.env.URL_DB
            }
    }

}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();
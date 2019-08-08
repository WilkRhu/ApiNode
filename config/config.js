const env = process.env.NODE_ENV || 'dev';

//Resposnsável por indentificar os ambientes de desenvolvimento e trazer a conexão com o banco de dados
const config = () =>{
    switch (env){
        case 'dev':
            return{
                bd_string: 'mongodb+srv://usuario_admin:111209@clusterapi-n3pu5.mongodb.net/test?retryWrites=true&w=majority'
            }

        case 'html':
            return{
                bd_string: 'mongodb+srv://usuario_admin:111209@clusterapi-n3pu5.mongodb.net/test?retryWrites=true&w=majority'
            }   
            
        case 'prod':
            return{
                bd_string: 'mongodb+srv://usuario_admin:111209@clusterapi-n3pu5.mongodb.net/test?retryWrites=true&w=majority'
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();
# ApiNode
Teste de admissão Concrete
Criação de Api com autenticação de usuário
Banco de dados ultilizado momgo DB Atlas banco funcinando online
Ultilizado o express
Linha de comando para start é // node app.js

Rotas
Url Base de acesso: https://apinodeconcrete.herokuapp.com/
Rota create criação de usuários retorna com o token ('users/create');
corpo da criação: 
{
	"nome": "Wilk Caetano França",
	"email": "wilk.caetnao@gmail.com",
	"password": "123456",
	"telefone" :{
			"ddd": "081",
			"numero" : "993949202"
	}
}

Rota auth retorana o usuário com o token autenticado, representa o login de acesso que retorna o token para ser enviado para a home com o header e passar para a "pagina home do sistema" ('users/auth');
Corpo do auth:
{
    "email": "email do usuário cadastrado",
    "password": "senha usada na hora do cadastro"
}


Rota home representa a entrada no sistema, só passa pela rota quem for autenticado ('/home');

Rota lista-users quem passar o token de autenticação pelo header, terá acesso a uma lista de usuários cadastrada no banco ('users/lista-users')


# ApiNode
Teste de admissão Concrete
Criação de Api com autenticação de usuário
Banco de dados ultilizado momgo DB Atlas banco funcinando online
Ultilizado o express
Linha de comando para start é // node app.js

Rotas
Rota home representa a entrada no sistema, só passa pela rota quem for autenticado ('/home');
Rota create criação de usuários ('users/create');
Rota auth retorana o usuário com o token autenticado ('users/auth');
Rota lista-users quem passar o token de autenticação pelo header, terá acesso a uma lista de usuários cadastrada no banco ('users/lista-users')


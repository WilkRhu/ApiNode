const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

//Home da aplicação com autenticação recebe no header o token para poder acessar essa rota
router.get('/home', auth, (req, res) => {
    return res.send({message: 'Seja Bem Vindo ao Sistema'})
});



module.exports = router;
const express = require('express');
const router = express.Router();
const Alunos = require('../../model/alunos');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../../middlewares/auth');


//Funçoes Auxiliares Criação de Token
const createUserToken = (userId) => {
    return jwt.sign({id: userId}, 'wilkcaetano', { expiresIn: '7d'});
}
router.get('/',  async(req, res) => {
    try{
        const alunos = await Alunos.find({});
        return res.json(alunos);
    }catch(err) {
        return res.status(500).send({ err: 'Erro na consulta de Alunos! '})
    }
});

router.post('/create', async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).send({ error: 'Dados Insuficientes' });
    
    try{
        const aluno = await Alunos.create(req.body);
        aluno.password = undefined;
        return res.status(201).send({aluno, token: createUserToken(aluno.id)})
    }catch(err) {
        return res.status(500).send({err: 'Erro ao criar Aluno!'});
    }
})

module.exports = router;
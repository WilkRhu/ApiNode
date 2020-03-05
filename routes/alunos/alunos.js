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
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({error: 'Dados insuficientes!'});
    try{
        const alunos = await Alunos.findOne({email}).select('+password');
        
         if(!alunos) return res.status(400).send({error: 'Usuário e/ou senha inválidos!'});
        
        const pass_ok = await bcrypt.compare(password, alunos.password);
        if(!pass_ok) return res.status(401).send({error: 'Usuário e/ou senha inválidos'});

        alunos.password = undefined;
        return res.send({alunos, token: createUserToken(alunos.id)});
    }
    catch(err){
        return res.status(500).send({error:'Não autorizado'});
    }
});

module.exports = router;
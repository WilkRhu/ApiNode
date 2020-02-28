const express = require('express');
const router = express.Router();
const Teacher = require('../../model/teacher');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../../middlewares/auth');


const createUserToken = (userId) => {
    return jwt.sign({id: userId}, 'wilkcaetano', { expiresIn: '7d'});
}

router.get('/',  async(req, res) => {
    try{
        const teacher = await Teacher.find({});
        return res.send(teacher);
    }catch(err) {
        return res.status(500).send({ err: 'Erro na consulta de Professores! '})
    }
});

router.post('/create', async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).send({ error: 'Dados Insuficientes' });
    
    try{
        const teacher = await Teacher.create(req.body);
        teacher.password = undefined;
        return res.status(201).send({teacher, token: createUserToken(teacher.id)})
    }catch(err) {
        return res.status(500).send({err: 'Erro ao criar Professor!'});
    }
})

module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    return res.send({message: 'tudo ok com o metodo get da raiz'})
});

router.post('/', auth, (req, res) => {
    return res.send({message: 'tudo ok com o metodo post da raiz'})
});

module.exports = router;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');



//Model para criação do banco de dados cadastro de usuários
const UserSchema = new Schema({
    nome: {type: String, unique:true, required: true, min:1, max:100},
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true, select: false},
    telefones:{
        ddd:{type: String, max:3},
        numero:{type: String, min: 1, max: 100}
    },

    created: {type: Date, default: Date.now},
    update_user: {type: Date, default: Date.now}

});

//Função de Encriptção de Senha 
UserSchema.pre('save', async function(next){
    let user = this;
    if(!user.isModified('password')) return next();

    user.password = await bcrypt.hash(user.password, 10);
    return next();

});



module.exports = mongoose.model('User', UserSchema);
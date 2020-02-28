const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt  =  require('bcrypt');

const TeacherSchema = new Schema({
    name: {type: String, required: true, min: 1, max: 100 },
    email: {type: String, unique: true, required: true, lowercase: true},
    password: {type: String, required: true, select: false},
    state: {type: String},
    city: {type: String},
    telephone:{
        ddd:{type: String, max:3},
        numero:{type: String, min: 1, max: 100}
    },
    school_name: {type: String },
    graduation_university_name: {type: String},
    graduation_year: {type: String},
    work_school_name: {type: String},
    created_at: {type: String, default: Date.now},
    updated_at: {type: Date}

});

TeacherSchema.pre('save', async function(next){
    let teacher = this;
    if(!teacher.isModified('password')) return next();

    teacher.password = await bcrypt.hash(teacher.password, 10);
    return next();
});

module.exports = mongoose.model('Teacher', TeacherSchema);
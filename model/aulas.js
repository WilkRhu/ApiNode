const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AulasSchema = new Schema({
  id_teacher: {
    type: String
  },
  title: { type: String },
  content: { type: String },
  name_teacher: {type: String},
  link: {type: String},
  create_at: { type: String, default: Date.now },
  update_at: { type: Date }
});

module.exports = mongoose.model("Aulas", AulasSchema);

const express = require("express");
const router = express.Router();
const Aulas = require("../../model/aulas");
const Teacher = require("../../model/teacher");

router.get("/", async (req, res) => {
  try {
    const aulas = await Aulas.find({});
    return res.status(200).send(aulas);
  } catch (err) {
    return res.status(500).send({ err: "Erro na pesquisa das aulas!" });
  }
});

router.post("/create/:id", async (req, res) => {
  const id = req.params.id;
  const { title, content, link } = req.body

  try {
    const teacher = await Teacher.findById(id);
    const aulas = await Aulas.create({ title, content, link, id_teacher: id, name_teacher: teacher.name });
    return res.status(201).send({ aulas });
  } catch (err) {
    return res.status(400).send({ err: "Aula não cadastrada" });
  }
});

router.get("/searchAulasTeacher/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const aulas = await Aulas.find({ id_teacher: id }, {});
    return res.status(200).send({ aulas });
  } catch (err) {
    return res.send({ err: "Erro na busca de aulas por professor!" });
  }
});

module.exports = router;

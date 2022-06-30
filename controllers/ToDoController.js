const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text })
    .then(() => res.set(200).send("Task has been added"))
    .catch((err) => console.log(err));
};


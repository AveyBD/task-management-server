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

module.exports.deleteTodo = (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(200).send("Task has been deleted"))
    .catch((err) => console.log(err));
};

module.exports.updateTodo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(200).send("Task has been updated"))
    .catch((err) => console.log(err));
};

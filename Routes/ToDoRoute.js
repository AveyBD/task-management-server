const { Router } = require("express");
const router = Router();

const {
  getToDo,
  saveToDo,
  deleteTodo,
  updateTodo,
} = require("../controllers/ToDoController");
router.get("/todo", getToDo);
router.post("/todo", saveToDo);
router.post("/delete", deleteTodo);
router.post("/update", updateTodo);

module.exports = router;

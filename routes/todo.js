const express = require("express")
const { getTodo, getTodoDetail, createTodo, updateTodo, deleteTodo } = require("../controllers/todo");

const userController = require('../controllers/user')
const authController = require('../middleware/auth')

const todoController = require('../controllers/todo')
// const auth = require("./auth")

// express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const todo = express.Router()

todo.get('/todos', getTodo);
todo.get('/todos/:id', getDetailTodo);
todo.post('/todos', createTodo);
todo.patch('/todos/:id', updateTodo);
todo.delete('/todos/:id', deleteTodo);

module.exports = {
  todo
}
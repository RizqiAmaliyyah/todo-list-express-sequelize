const { Todo } = require("../models/todo")

// get all todos

const getTodo = require('./todos', async function (req, res) {
  try {
    const todos = await getTodo.findAll();

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});

// get todo detail by Id
const getTodoDetail = require('./models').Todo;

app.get('/todos/:todoId', async function (req, res) {
  try {
    const { todoId } = req.params;
    const todo = await getTodoDetail.findOne({id: Number(todoId)});

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});

// create new todo
const createTodo = require('./models').Todo;

app.post('/todos', async function (req, res) {
  try {
    const { username, tittle, description, startTime } = req.body;

    const newTodoData = {
      username: username,
      tittle: tittle,
      description: description,
      startTime: startTime,
      status: 'false'
    };

    const newTodo = await createTodo.create(newTodoData);

    res.status(201).json({
      message: 'new todo created',
      todo: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});


// update todo
const updateTodo = require('./models').Todo;

app.patch('/todos/:todoId', async function (req, res) {
  try {
    const { todoId } = req.params;
    const { username, tittle, description, startTime, status } = req.body;

    const updateTodoData = {
      username: username,
      tittle: tittle,
      description: description,
      startTime: startTime,
      status: status,
    };

    const updatedTodo = await updateTodo.update(updateTodoData, {
      where: {
        id: todoId,
      }
    });

    res.status(200).json({
      message: 'update todo success thank you',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});


// delete todo
const deleteTodo = require('./models').Todo;

app.delete('/todos/:todoId', async function (req, res) {
  try {
    const { todoId } = req.params;

    await deleteTodo.destroy({
      where: {
        id: todoId,
      },
    });

    res.status(200).json({
      message: 'delete todo succes thank you',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});

module.exports = {
  getTodo,
  getTodoDetail,
  createTodo,
  updateTodo,
  deleteTodo
}
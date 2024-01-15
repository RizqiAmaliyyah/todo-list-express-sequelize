const { Todo } = require("../models/todo")

// get all todos

const TodoModel = require('./todos', async function (req, res) {
  try {
    const todos = await TodoModel.findAll();

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});

// get todo detail by Id
const TodoModel = require('./models').Todo;

app.get('/todos/:todoId', async function (req, res) {
  try {
    const { todoId } = req.params;
    const todo = await TodoModel.findOne({id: Number(todoId)});

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});

// create new todo

const TodoModel = require('./models').Todo;

app.post('/todos', async function (req, res) {
  try {
    const { username, tittle, description, startTime } = req.body;

    const mewTodoData = {
      username: username,
      tittle: tittle,
      description: description,
      startTime: startTime,
      status: 'false'
    };

    const newTodo = await TodoModel.create(newTodoData);

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
const TodoModel = require('./models').Todo;

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

    const updatedTodo = await TodoModel.update(updateTodoData, {
      where: {
        id: todoId,
      }
    });

    res.status(200).json({
      message: 'update todo succes',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'internal server error try again later',
    });
  }
});


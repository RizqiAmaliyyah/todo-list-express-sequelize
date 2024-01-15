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


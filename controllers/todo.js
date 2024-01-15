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

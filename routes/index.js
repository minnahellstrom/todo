var Todo = require('../models/Todo');

exports.index = function(req, res) {
  Todo.find({}, function(err, todos) {
    res.render('index', {
      title: 'Todo',
      todos: todos
    });
  });
};

exports.create = function(req, res) {
  var todoFields = req.body;
  var todo = new Todo();
  todo.title = todoFields.title;
  todo.done = false;
  todo.save();
  res.redirect('/');
};

exports.update = function(req, res) {
  var todoFields = req.body;
  Todo.update(
    {_id: req.params.id}, 
    {done: todoFields.done ? true : false},
    function(err) {
      if (err) throw err;
      res.redirect('/');
  });
};

exports.delete = function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    todo.remove();
    res.redirect('/');
  });
};
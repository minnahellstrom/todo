var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_app');

var schema = new mongoose.Schema({
  title: String,
  done: Boolean
});

module.exports = mongoose.model('Todo', schema);
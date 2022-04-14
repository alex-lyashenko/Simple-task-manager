const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'здесь должно быть название'],
    trim: true,
    maxlength: [20, 'название не может быть длиннее 20 символов'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
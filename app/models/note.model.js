const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    auther: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Note', NoteSchema);
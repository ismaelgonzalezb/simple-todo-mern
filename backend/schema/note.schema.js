const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const NoteSchema = new Schema({
  text: { type: String, require: true },
});

const NoteModel = mongoose.model("ToDoApp", NoteSchema);

module.exports = {
  NoteModel,
};

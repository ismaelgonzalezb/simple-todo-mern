const { NoteModel } = require("../schema/");

class NoteController {
  getNotes = async (req, res) => {
    const toDoModel = await NoteModel.find();
    res.status(200).send(toDoModel);
  };

  createNote = async (req, res) => {
    const { text } = req.body;

    await NoteModel.create({ text }).then(() => {
      console.log(`Added Successfully`);
      res.status(201).send();
    });
  };

  updateNote = async (req, res) => {
    const { id } = req.params;

    await NoteModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(204).send();
  };

  deleteNote = async (req, res) => {
    const { id } = req.params;

    await NoteModel.findByIdAndDelete({ _id: id });
    res.status(204).send();
  };
}

module.exports = {
  NoteController: new NoteController(),
};

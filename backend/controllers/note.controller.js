const { NoteModel } = require("../schema/");

class NoteController {
  getNotes = async (req, res) => {
    const toDoModel = await NoteModel.find();
    res.send(toDoModel);
  };

  createNote = async (req, res) => {
    const { text } = req.body;

    await NoteModel.create({ text }).then((data) => {
      console.log(`Added Successfully`);
      res.send(data);
    });
  };

  updateNote = async (req, res) => {
    const { id } = req.params;

    await NoteModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send();
  };

  deleteNote = async (req, res) => {
    const { id } = req.params;

    await NoteModel.findByIdAndDelete({ _id: id });
    res.send();
  };
}

module.exports = {
  NoteController: new NoteController(),
};

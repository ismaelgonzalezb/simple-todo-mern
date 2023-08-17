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
    const { id: _id } = req.params;

    await NoteModel.findByIdAndUpdate(_id, req.body).then(() => {
      res.status(204).send(console.log(`Updated Successfully`));
    });
  };

  deleteNote = async (req, res) => {
    const { id } = req.params;

    await NoteModel.findByIdAndDelete({ _id: id }).then(() => {
      res.status(204).send(console.log(`Removed successfully`));
    });
  };
}

module.exports = {
  NoteController: new NoteController(),
};

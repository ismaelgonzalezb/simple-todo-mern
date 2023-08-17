const { Router } = require("express");
const { NoteController } = require("../controllers");

const NoteRoutes = Router();

NoteRoutes.get("/", NoteController.getNotes);
NoteRoutes.post("/note", NoteController.createNote);
NoteRoutes.patch("/:id", NoteController.updateNote);
NoteRoutes.delete("/:id", NoteController.deleteNote);

module.exports = {
  NoteRoutes,
};

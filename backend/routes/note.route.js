const { Router } = require("express");

const NoteRoutes = Router();

NoteRoutes.get("/");
NoteRoutes.post("/note");
NoteRoutes.patch("/:id");
NoteRoutes.delete("/:id");

module.exports = {
  NoteRoutes,
};

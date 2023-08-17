require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { NoteRoutes } = require("./routes");

PORT = process.env.APP_PORT;
MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());

app.use("/api/notes/", NoteRoutes);

mongoose
  .connect(MONGO_URI)
  .then(
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    }),
    console.log(`Connected to MongoDB`)
  )
  .catch((err) => {
    console.log(err);
  });

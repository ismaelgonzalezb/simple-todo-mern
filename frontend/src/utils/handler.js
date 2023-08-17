import axios from "axios";

const baseUrl = "http://localhost:4000/api/notes";

const getAllNotes = async (setToDo) => {
  await axios.get(baseUrl).then(({ data }) => {
    console.log("notes ->", data);
    setToDo(data);
  });
};

const addNote = async (text, setText, setToDo) => {
  await axios
    .post(`${baseUrl}/note`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllNotes(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = async (toDoId, text, setToDo, setText, setIsUpdating) => {
  await axios
    .patch(`${baseUrl}/${toDoId}`, { text })
    .then((data) => {
      setText("");
      console.log(data);
      setIsUpdating(false);
      getAllNotes(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = async (_id, setToDo) => {
  await axios
    .delete(`${baseUrl}/${_id}`)
    .then(() => {
      getAllNotes(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllNotes, addNote, updateToDo, deleteToDo };

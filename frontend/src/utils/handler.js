import axios from "axios";

const baseUrl = "http://localhost:4000/api/notes";

const getAllNotes = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("notes ->", data);
    setToDo(data);
  });
};

const addNote = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/note`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllNotes(setToDo);
  });
};

export { getAllNotes, addNote };

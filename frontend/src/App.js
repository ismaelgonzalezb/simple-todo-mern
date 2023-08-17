import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllNotes, addNote } from "./utils/handler";

function App() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getAllNotes(setToDo);
  }, []);

  const [text, setText] = useState("");
  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>
      </div>
      <div className="top">
        <input
          type="text"
          placeholder="Add new note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="add" onClick={() => addNote(text, setText, setToDo)}>
          Add note
        </div>
      </div>

      <div className="list">
        {toDo.map((item) => (
          <ToDo key={item._id} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default App;

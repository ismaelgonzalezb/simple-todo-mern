import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>
      </div>
      <div className="top">
        <input type="text" placeholder="Add new note.." />
        <div className="add">Add note</div>
      </div>

      <div className="list">
        <ToDo text="Hi" />
        <ToDo text="Hi" />
        <ToDo text="Hi" />
      </div>
    </div>
  );
}

export default App;

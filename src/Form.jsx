import { useState } from "react";
import shortid from "shortid";
function Form({ onSubmit }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: shortid.generate(),
      text: task,
      complete: false,
    });
    setTask("");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        placeholder="add your task here"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
export default Form;

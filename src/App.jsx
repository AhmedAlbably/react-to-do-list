import shortid from "shortid";
import Details from "./Details";
import Form from "./Form";
import { useState } from "react";

function App() {
  let [taskList, setTaskList] = useState([]);
  const [showUpdate, setShowUpdate] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);
  const showData = (data) => {
    setTaskList([...taskList, data]);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const update = (text) => {
    setShowUpdate(text);
    console.log(text);
  };

  switch (true) {
    case showUpdate === "active":
      taskList = taskList.filter((task) => !task.complete);
      break;
    case showUpdate === "complete":
      taskList = taskList.filter((task) => task.complete);
      break;
  }

  const toggleComplete = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete,
          };
        } else {
          return task;
        }
      })
    );
  };

  const removeAllComplete = () => {
    setTaskList(taskList.filter((task) => !task.complete));
  };

  const toggleAllCompleteTask = () => {
    setTaskList(
      taskList.map((task) => {
        return {
          ...task,
          complete: toggleAllComplete,
        };
      })
    );
    setToggleAllComplete(!toggleAllComplete);
  };

  return (
    <div className="container">
      <Form onSubmit={showData} />
      {taskList.map((task, index) => (
        <Details
          key={(task.id, index)}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
      <div className="feature-container">
        <button className="feature" onClick={() => update("all")}>
          All
        </button>
        <button className="feature active" onClick={() => update("active")}>
          Active
        </button>
        <button className="feature complete" onClick={() => update("complete")}>
          Complete
        </button>
        <div className="another-features">
          {taskList.some((task) => task.complete) ? (
            <button className="removeAll" onClick={removeAllComplete}>
              Remove All Complete
            </button>
          ) : null}
          <button className="toggle" onClick={toggleAllCompleteTask}>
            {" "}
            toggle all complete = {`${toggleAllComplete}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

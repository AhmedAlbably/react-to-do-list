function Details({ deleteTask, task, toggleComplete }) {
  return (
    <div className="details">
      <h3
        onClick={() => toggleComplete(task.id)}
        style={{ textDecoration: task.complete ? "line-through" : "" }}
      >
        {task.text}
      </h3>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Details;
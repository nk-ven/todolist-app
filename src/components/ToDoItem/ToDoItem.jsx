const ToDoItem = (props) => {
  return (
    <li key={props.index}>
      <span className="text">{props.task}</span>
      <button
        className="delete-button"
        title="Delete"
        onClick={() => props.deleteTask(props.index)}
      >
        X
      </button>
      <button
        className="move-button"
        title="Move Up"
        onClick={() => props.moveTaskUp(props.index)}
      >
        ^
      </button>
      <button
        className="move-button"
        title="Move Down"
        onClick={() => props.moveTaskDown(props.index)}
      >
        v
      </button>
    </li>
  );
};

export default ToDoItem;

import { useState } from "react";
import "./todolist.css";
import ToDoItem from "./ToDoItem/ToDoItem";

function ToDoList() {
  const [task, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [newTask, ...t]);
      setNewTask(""); // Clear the input field after adding the task
    }
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          placeholder="enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" type="submit">
          +
        </button>
      </form>

      <ul>
        {task.map((task, index) => (
          <ToDoItem
            key={index}
            index={index}
            task={task}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;

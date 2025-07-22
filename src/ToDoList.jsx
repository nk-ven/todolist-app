 import react, { useState } from 'react';

 function ToDoList(){

    const [task, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if (newTask.trim()  !== ""){
             setTasks(t =>[...t, newTask]);
             setNewTask("");
        }

       
    }

    function deleteTask(index){
        const updatedTasks = task.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...task];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
         if(index < task.length - 1){
            const updatedTasks = [...task];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }



    return(
    <div className="to-do-list">

        <h1>To-Do List</h1>

        <div>
            <input
             type="text" placeholder="enter a task..."
             value={newTask}
             onChange={handleInputChange}  />
            <button className="add-button" onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {task.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                    Delete
                </button>
                 <button className="move-button" onClick={() => moveTaskUp(index)}>
                    up
                </button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>
                    down
                </button>
            </li>) }
        </ol>

    </div>);
 }
 export default ToDoList;
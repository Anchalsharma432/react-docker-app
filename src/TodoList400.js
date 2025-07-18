import React, { useState, useEffect } from 'react';
import './TodoList400.css';

function TodoList400() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addItem = () => {
    if (!task.trim()) return alert('Please enter a task!');
    const newTasks = [...tasks, { title: task.trim(), completed: false }];
    setTasks(newTasks);
    setTask('');
    showMessage(`${task} is added to the list`, 'blue');
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
    showMessage(`${newTasks[index].title} is marked as completed`, 'green');
  };

  const deleteTask = (index) => {
    const deleted = tasks[index].title;
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    showMessage(`${deleted} is deleted from the list`, 'red');
  };

  const clearAll = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
    showMessage('All items have been cleared from the list!', 'red');
  };

  const showMessage = (msg, color) => {
    setMessage({ text: msg, color });
    setTimeout(() => setMessage(''), 1000);
  };

  return (  
    <div className="div-body">
      <h1 className="hh1">ANCHAL SHARMA</h1>
      <h1>To-Do List</h1>
      <div className="div2">
        <input
          id="text"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <div className="div-btn">
          <button className="btn" onClick={addItem}>Add Task</button>
        </div>
      </div>

      <div id="list">
        {tasks.map((task, i) => (
          <li key={i} style={{ backgroundColor: task.completed ? 'grey' : '' }}>
            <div style={{ color: task.completed ? 'white' : 'black' }}>
              <strong>{task.title}</strong>
            </div>
            <div className="btn-buttons">
              <button
                className="complete-btn"
                onClick={() => completeTask(i)}
                disabled={task.completed}
              >
                {task.completed ? 'Completed' : 'Complete'}
              </button>
              <button className="delete-btn" onClick={() => deleteTask(i)}>Remove</button>
            </div>
          </li>
        ))}
      </div>

      {message && <div id="div3" style={{ color: message.color }}>{message.text}</div>}

      <div className="removebtn">
        <button onClick={clearAll}>Clear items</button>
      </div>
    </div>
  );
}

export default TodoList400;
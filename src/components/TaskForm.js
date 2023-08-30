// src/components/TaskForm.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title: 'New Task', status: 'To Do' };
    dispatch(addTask(newTask));
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Add New Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

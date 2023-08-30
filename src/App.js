// src/App.js
import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default function App() {
  return (
    <div>
      <h1>TaskApp</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

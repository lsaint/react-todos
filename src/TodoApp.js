import React from 'react';
import SummaryBar from './components/SummaryBar.js';
import TodoList from './components/TodoList.js';
import InsertBar from './components/InsertBar.js';
import './App.css';

export default function TodoApp() {
  return (
    <div className="app">
      <h1>Todos</h1>
      <SummaryBar />
      <TodoList />
      <InsertBar />
    </div>
  );
}

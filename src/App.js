import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App(){
  return (
    <div>
      <h1>Список Имён</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};
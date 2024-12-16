import React from 'react';

export default function TodoItem({ todo, onRemove}){
  
  
  return (
    <ul>
      <li>
        {todo.textName}
      </li>
      <button onClick={onRemove}>Удалить</button>
    </ul>
  );
};

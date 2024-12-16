import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoTask} from '../features/todoSlice';
import TodoItem from './TodoItem';

export default function TodoList(){
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
   
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onRemove={() => dispatch(removeTodoTask(todo.id))}
          />
        ))}
      </ul>
    </div>
  );
};

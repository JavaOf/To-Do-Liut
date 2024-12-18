import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName, removeName, editName } from './features/names/nameSlice';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const names = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const handleAddName = () => {
    if (inputValue.trim()) {
      const newName = {
        id: Date.now(), 
        name: inputValue.trim(),
      };
      dispatch(addName(newName));
      setInputValue('');
    }
  };

  const handleRemoveName = (id) => {
    dispatch(removeName(id));
  };

  const handleEditName = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };

  const handleSaveEdit = () => {
    if (editValue.trim()) {
      dispatch(editName({ id: editId, newName: editValue.trim() }));
      setEditId(null);
      setEditValue('');
    }
  };

  return (
    <div>
      <h1>Список имен</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={handleAddName}>Добавить</button>

      <ul>
        {names.map((name) => (
          <li key={name.id}>
            {editId === name.id ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Сохранить</button>
                <button onClick={() => setEditId(null)}>Отмена</button>
              </div>
            ) : (
              <div>
                {name.name}
                <button onClick={() => handleEditName(name.id, name.name)}>Редактировать</button>
                <button onClick={() => handleRemoveName(name.id)}>Удалить</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

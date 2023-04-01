import React, { useState } from 'react'
import classes from './todocard.module.css'

const TodoCard = ({ 
  task, 
  handleDelete,
  handleDone,
  handleEdit,
  handleSelectCurrent,
  iEdit,
  onCancel
}) => {
  const [newTitle, setNewTitle] = useState(task.title);

  if (iEdit) {
    return (
      <div>
        <input 
          name='edit'
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button onClick={() => {
          handleEdit({...task, title: newTitle});
          onCancel();
        }}>Save</button>
        <button onClick={() => onCancel()}>Cancel</button>
      </div>
    );
  }

  return (
    <div className={`${classes.todoCard} ${task.completed ? classes.completed : ''}`}>
      <h5>{task.title}</h5>
      <button onClick={() => handleSelectCurrent(task.id)}>Edit</button>
      <button onClick={() => handleDone(task.id)}>Done</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;

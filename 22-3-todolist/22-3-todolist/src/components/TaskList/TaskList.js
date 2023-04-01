import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';

const TaskList = ({ 
  list,
  handleDelete,
  handleDone,
  handleEdit
}) => {
  const [currentEdit, setCurrentEdit] = useState(null);

  const handleCancelEdit = () => setCurrentEdit(null);

  return (
    <div>
      {list.map((task) => (
        <TodoCard
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          handleSelectCurrent={setCurrentEdit}
          iEdit={task.id === currentEdit}
          onCancel={handleCancelEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;

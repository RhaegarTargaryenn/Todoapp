import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from './Redux/action';
import { FaEdit, FaTrash,FaArrowLeft } from 'react-icons/fa';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(todo.heading);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedHeading.trim() !== '' && editedDescription.trim() !== '') {
      editTodo(todo.id, editedHeading.trim(), editedDescription.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedHeading(todo.heading);
    setEditedDescription(todo.description);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex items-center absolute bottom-[600px]  left-[330px]">
          <input
            type="text"
            value={editedHeading}
            onChange={(e) => setEditedHeading(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded absolute left-[700px] top-[170px]"
          />
          <input 
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border border-gray-300 rounded absolute left-[700px] top-[210px] h-[30px] w-[200px]"
          />
          
          <span className='relative top-[100px] text-white left-[680px]'><FaArrowLeft/></span>
          <div className='font-[inter] text-white absolute left-[700px] top-[100px] w-[70px]'>Edit Todo</div>
          <button
            onClick={handleSave}
            className="px-2 py-1 w-[200px] bg-blue-500 text-white rounded absolute left-[700px] top-[280px]"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-2 py-1 w-[200px] bg-red-500 text-white rounded absolute left-[700px] top-[320px] "
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center ">
        <span
  onClick={handleToggle}
  className={`cursor-pointer ${
    todo.completed ? 'line-through text-gray-500' : 'text-white'
  } relative bottom-[300px] left-[310px] bg-[#191B20] w-[210px] h-[80px] rounded-[10px] break-inside-auto transition-all duration-300`}
  style={{
    border: '1px solid transparent',
  }}
  onMouseEnter={(e) => {
    e.target.style.border = '1px solid white';
  }}
  onMouseLeave={(e) => {
    e.target.style.border = '1px solid transparent';
  }}
>
  {editedHeading} - {editedDescription}
</span>

          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-700 relative bottom-[330px] left-[287px]"
          >
            <FaEdit />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 relative bottom-[300px] left-[270px] "
          >
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(null, { toggleTodo, deleteTodo, editTodo })(TodoItem);

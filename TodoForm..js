// TodoForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './Redux/action';
import { FaPlus } from 'react-icons/fa';

const TodoForm = ({ addTodo }) => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (heading.trim() !== '' && description.trim() !== '') {
      addTodo(heading, description); // Pass heading and description as separate arguments
      setHeading('');
      setDescription('');
    }
  };

  return (
    <div  className=' bg-[#242731] w-[220px] h-[120px] border-[white]  absolute top-[137px] left-[300px] rounded-[20px] ml-2'>
    <form onSubmit={handleSubmit}>
      <input className=' bg-[#242731] text-white mt-3 ml-3 w-[130px]'
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        placeholder="Add a Todo..."
      />
      <input className= ' absolute top-[59px] left-[1px] bg-[#242731] pt-2 font-[poppins] text-[15px] text-white w-[130px] ml-3 h-[20px]'
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add todo description"
      />
      <button className='relative left-6 top-2 text-white ' type="submit"><FaPlus/></button>
    </form>
    </div>
  );
};

export default connect(null, { addTodo })(TodoForm);
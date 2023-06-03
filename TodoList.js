// TodoList.jsx
import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from './Redux/action';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id, heading, description) => {
    const newHeading = prompt('Enter new heading:', heading);
    const newDescription = prompt('Enter new description:', description);

    if (newHeading && newDescription) {
      editTodo(id, newHeading, newDescription);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
    

  );
};


const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
 

export default connect(mapStateToProps, { deleteTodo, editTodo })(TodoList);

// actions.js
export const addTodo = (heading, description) => ({
  type: 'ADD_TODO',
  payload: {
    heading,
    description,
  },
});

  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: {
      id,
    },
  });

  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: {
      id,
    },
  });


  export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    payload: {
      id,
      text,
    },
  });
  
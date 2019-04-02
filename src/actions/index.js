let nextTodoId = 0;
export const addTodo = (text, inEditMode, checked) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
  inEditMode,
  checked
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const toggleEdit = id => ({
  type: "TOGGLE_EDIT",
  id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});

export const updateTodo = (id, text) => ({
  type: "UPDATE_TODO",
  id,
  text
});

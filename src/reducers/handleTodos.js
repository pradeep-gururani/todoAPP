const handleTodos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("inside add todos..!!");
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          inEditMode: null,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return;

    case "TOGGLE_EDIT":
      console.log("editing--->", action.id);
      return state.map(todo =>
        todo.id === action.id ? { ...todo, inEditMode: action.id } : todo
      );
    default:
      return state;
  }
};

export default handleTodos;

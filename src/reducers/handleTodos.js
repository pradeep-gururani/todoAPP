import { toast } from "react-toastify";

const handleTodos = (state = [], action) => {
  let stateIndex;
  for (let i in state) {
    if (state[i].id === action.id) {
      stateIndex = i;
      break;
    }
  }
  switch (action.type) {
    case "ADD_TODO":
      let newState = [
        ...state,
        {
          id: action.id,
          text: action.text,
          inEditMode: null,
          checked: false
        }
      ];
      toast.success("todo added successfully!!");
      return newState;
    case "DELETE_TODO":
      let delState = [...state];
      delState.splice(stateIndex, 1);
      toast.warn("deleted todo");
      return [...delState];

    case "TOGGLE_EDIT":
      let editState = [...state];
      editState[stateIndex].inEditMode = action.id;
      return [...editState];

    case "CANCLE_EDIT":
      let cancEdit = [...state];
      cancEdit[stateIndex].inEditMode = null;
      return [...cancEdit];

    case "UPDATE_TODO":
      let updState = [...state];
      updState[stateIndex].text = action.text;
      updState[stateIndex].inEditMode = null;
      toast.info("updated todo!");
      return [...updState];

    case "CHECK_TODO":
      toast.info("updated todo!");
      return state.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );

    default:
      return state;
  }
};

export default handleTodos;

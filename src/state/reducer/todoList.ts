interface TodoList {
  id: number;
  text: string;
}
export default function (state: TodoList[] = [], action) {
  switch (action.type) {
    case "ADD_TO_DO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
      break;
    case "TOGGLE_TO_DO":
      return state.map((item) => item.id === action.id);
  }
}

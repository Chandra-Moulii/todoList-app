import {
  ADD_TODO,
  EDIT_TODO,
  SEARCH_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  REMOVE_COMPLETED,
  REMOVE_ALL_TODOS,
  SHOW_REMAINING,
} from "../Actions/TodoAction";

let retrieved = JSON.parse(localStorage.getItem("allTodos"));

const InitialState = {
  allTodos: retrieved === null ? [] : retrieved,
  draft: [],
  showcompleted: false,
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        allTodos: (state.allTodos = [
          ...state.allTodos,
          {
            id: action.payload.id,
            todo: action.payload.todo,
            done: action.payload.done,
            date: action.payload.date,
          },
        ]),
      };

    case REMOVE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => todo.id !== action.payload),
        draft: state.draft.filter((todo) => todo.id !== action.payload),
      };

    case COMPLETE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.map((todo) => {
          if (todo.id === action.payload) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };

    case SEARCH_TODO:
      return {
        ...state,
        draft: state.allTodos.filter(({ todo }) => {
          return todo.toLowerCase().includes(action.payload.toLowerCase());
        }),
      };

    case REMOVE_ALL_TODOS:
      return {
        ...state,
        allTodos: [],
      };

    case REMOVE_COMPLETED:
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => {
          return todo.done === false;
        }),
      };

    case EDIT_TODO:
      return {
        ...state,
        allTodos: state.allTodos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.todo = action.payload.edit;
          }
          return todo;
        }),
      };

    case SHOW_REMAINING:
      return {
        ...state,
        showcompleted: action.payload,
      };
    default:
      return state;
  }
};

export const EDIT_TODO = "EditTodo";
export const ADD_TODO = "AddTodo";
export const SEARCH_TODO = "SearchTodo";
export const REMOVE_TODO = "RemoveTodo";
export const COMPLETE_TODO = "CompleteTodo";
export const SHOW_REMAINING = "ShowReamaining";
export const REMOVE_ALL_TODOS = "RemoveAllTodos";
export const REMOVE_COMPLETED = "RemoveCompleted";

export function addTodo({ id, todo, done, date }) {
  return {
    type: ADD_TODO,
    payload: {
      id,
      todo,
      done,
      date,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
}

export function searchTodo(todo) {
  return {
    type: SEARCH_TODO,
    payload: todo,
  };
}

export function removeallTodos() {
  return {
    type: REMOVE_ALL_TODOS,
  };
}

export function removecompletedTodos() {
  return {
    type: REMOVE_COMPLETED,
  };
}

export function editTodo({ edit, id }) {
  return {
    type: EDIT_TODO,
    payload: {
      edit,
      id,
    },
  };
}

export function showremainingTodos(bool) {
  return {
    type: SHOW_REMAINING,
    payload: bool,
  };
}

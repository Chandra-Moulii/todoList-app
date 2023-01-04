import {
  removeallTodos,
  removecompletedTodos,
  showremainingTodos,
} from "./Redux/Actions/TodoAction";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Options() {
  const dispatch = useDispatch();
  const { allTodos } = useSelector((state) => state);
  const [hideActive, setHideActive] = useState(true);

  const remaining = allTodos.reduce((acc, todo) => {
    todo.done ? null : acc++;
    return acc;
  }, 0);

  // Handlers
  function clearAllTodos() {
    dispatch(removeallTodos());
  }
  function clearCompletedTodos() {
    dispatch(removecompletedTodos());
  }

  function showRemaining() {
    setHideActive(!hideActive);
    dispatch(showremainingTodos(hideActive));
  }

  return (
    <>
      <div className="d-flex flex-wrap w-50 mb-2">
        <button type="button" className="btn btn-sm btn-outline-secondary mr-2">
          Remaining todos ({remaining})
        </button>
        <button
          onClick={showRemaining}
          type="button"
          className="btn btn-sm  btn-outline-secondary mr-2"
        >
          {hideActive
            ? `Hide completed (${allTodos.length - remaining})`
            : `Show completed (${allTodos.length - remaining})`}
        </button>
        <button
          onClick={clearAllTodos}
          type="button"
          className="btn btn-sm btn-outline-danger mr-2"
        >
          Clear all
        </button>
        <button
          onClick={clearCompletedTodos}
          type="button"
          className="btn btn-sm btn-outline-danger"
        >
          Clear completed
        </button>
      </div>
    </>
  );
}

export default Options;

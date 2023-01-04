import EditTodo from "./EditTodo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "./Redux/Actions/TodoAction";
import { useEffect } from "react";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const { id, todo: todoName, done } = todo;
  const [edit, setEdit] = useState(todoName);
  const [editActive, setEditActive] = useState(false);

  function handleDelete() {
    dispatch(removeTodo(id));
  }

  function handleDone() {
    dispatch(completeTodo(id));
    setEditActive(false);
  }

  function handleEdit() {
    setEdit(todoName);
    setEditActive(!editActive);
  }

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      e.key == "Escape" ? setEditActive(false) : null;
    });
  }, []);

  function isdone(done) {
    let status;
    done
      ? (status = (
          <>
            <div className="p-1 pl-2 flex-grow-1 bd-highlight todo done">
              <s>{todoName}</s>
            </div>
            <i
              onClick={handleDone}
              title="Undo"
              className="bi bi-check2-all mr-3"
            ></i>
          </>
        ))
      : (status = (
          <>
            <div className="p-1 pl-2 flex-grow-1 bd-highlight todo ">
              {todoName}
            </div>
            <i
              onClick={handleDone}
              title="Mark as Done"
              className="bi bi-check2 mr-3"
            ></i>
            <i
              onClick={handleEdit}
              title="Edit"
              className="bi bi-pencil-square mr-3"
            ></i>
          </>
        ));
    return status;
  }

  return (
    <>
      <li className="list-group-item p-1 pr-2 ">
        <div className="d-flex flex-wrap align-items-center">
          {isdone(done)}
          <i
            onClick={handleDelete}
            title="Delete"
            className="bi bi-trash3 mr-1"
          ></i>
        </div>
        {editActive ? (
          <EditTodo props={{ id, todoName, edit, setEdit, setEditActive }} />
        ) : null}
      </li>
    </>
  );
}

export default Todo;

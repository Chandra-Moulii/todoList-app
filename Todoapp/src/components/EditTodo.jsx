import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "./Redux/Actions/TodoAction";

function EditTodo({ props }) {
  const inputref = useRef();
  const dispatch = useDispatch();
  const { id, todoName, edit, setEdit, setEditActive } = props;

  function saveChange() {
    if (edit) {
      dispatch(editTodo({ edit, id }));
      setEditActive(false);
    } else {
      inputref.current.focus();
    }
  }

  function handleEditChange({ target }) {
    setEdit(target.value);
  }

  function cancel() {
    setEdit(todoName);
    setEditActive(false);
  }
  
  useEffect(() => {
    inputref.current.focus();
  },[]);

  return (
    <>
      <div className="input-group p-1">
        <input
          type="text"
          ref={inputref}
          className="form-control"
          value={edit}
          maxLength={50}
          onChange={handleEditChange}
          placeholder="Edit your todo"
          aria-label="Todo edit field"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            onClick={saveChange}
            className="btn btn-sm btn-outline-success"
            type="button"
          >
            Save
          </button>
          <button
            onClick={cancel}
            className="btn btn-sm btn-outline-danger"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default EditTodo;

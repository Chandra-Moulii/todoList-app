import Alert from "./Alert";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/Actions/TodoAction";
import { useState, useEffect, useRef } from "react";

function Input() {
  const inpref = useRef();
  const dispatch = useDispatch();
  const [todo, settodo] = useState("");
  const [alertVisible, setAlertVisibility] = useState(false);

  function handleChange({ target }) {
    settodo(target.value);
  }

  function handleClick() {
    todo
      ? dispatch(
          addTodo({ id: uuidv4(), todo: todo, done: false, date: new Date() })
        )
      : inpref.current.focus();
    settodo("");
  }

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      e.keyCode === 191 && e.ctrlKey ? inpref.current.focus() : null;
    });
  }, []);

  return (
    <>
      {alertVisible ? <Alert /> : null}
      <div className="input-group mb-2 w-50 ">
        <input
          ref={inpref}
          type="text"
          value={todo}
          maxLength={57}
          onChange={handleChange}
          className="form-control border border-dark"
          placeholder="Enter your todo"
          aria-label="User todo"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            onClick={handleClick}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;

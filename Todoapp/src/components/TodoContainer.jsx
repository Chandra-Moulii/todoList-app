import Todo from "./Todo";
import Options from "./Options";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function TodoContainer() {
  const { allTodos, showcompleted } = useSelector((state) => state);

  // Sorting the array based on todo state
  allTodos.sort((a, b) => {
    if (a.done == false) {
      return -1;
    }
  });

  const maptodos = allTodos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  const remainingTodoCount = allTodos.reduce((acc, todo) => {
    todo.done ? null : acc++;
    return acc;
  }, 0);

  const filterdRemainingTodos = allTodos.filter((todo) => {
    return !todo.done;
  });

  const remainingTodos = filterdRemainingTodos.map((todo) => (
    <Todo key={todo.id} todo={todo} />
  ));

  useEffect(() => {
    document.title = `Todo app (${remainingTodoCount} tasks remaining)`;
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <>
      <Options />
      {maptodos.length === 0 ? (
        <p className="ml-1 info">No tasks !! Add a task to work on 🙄</p>
      ) : showcompleted ? (
        <ul className="list-group w-50  ">{remainingTodos}</ul>
      ) : (
        <ul className="list-group w-50 ">{maptodos}</ul>
      )}
    </>
  );
}

export default TodoContainer;

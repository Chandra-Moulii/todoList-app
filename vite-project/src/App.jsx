import Input from "./components/Input";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer";
import { searchTodo } from "./components/Redux/Actions/TodoAction";

function App() {
  const [searchactive, setsearchactive] = useState(false);
  const [searchquery, setsearchquery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTodo(searchquery));
  }, [searchquery]);

  return (
    <>
      <Navbar props={{ searchquery, setsearchquery, setsearchactive }} />
      <Input />
      {searchactive ? (
        <Search value={{ searchquery, setsearchquery, setsearchactive }} />
      ) : (
        <TodoContainer />
      )}
    </>
  );
}

export default App;

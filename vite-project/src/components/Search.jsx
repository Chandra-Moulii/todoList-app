import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function Search(props) {
  let { draft } = useSelector((state) => state);
  let { searchquery, setsearchquery, setsearchactive } = props.value;

  const maptodos = draft.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  //Click/Submit Handlers
  function clearSeachResults() {
    setsearchquery("");
    setsearchactive(false);
  }

  let results = maptodos.length !== 0 ? "Search" : "No";

  return (
    <>
      <div className="d-flex">
        <h6 className="font-weight-normal ml-1 mb-2">
          {results} results for
          <span className="text-secondary"> {searchquery}</span> |
        </h6>
        <h6
          onClick={clearSeachResults}
          className="font-weight-normal ml-1 mb-3 clear"
        >
          Clear search
        </h6>
      </div>
      <ul className="list-group w-50">{maptodos}</ul>
    </>
  );
}

export default Search;

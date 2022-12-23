function Navbar({ props }) {
  const { searchquery, setsearchquery, setsearchactive } = props;

  function handleChange({ target }) {
    setsearchquery(target.value);
    target.value !== "" ? setsearchactive(true) : setsearchactive(false);
  }

  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <nav className="navbar navbar-light bg-light w-50 mb-1 rounded p-2">
      <a className="navbar-brand  ml-1" href="/">
        Todo List app
        <span className="ml-2 headerDate">
          {new Date().toLocaleDateString()}
        </span>
      </a>
      <form className="form-inline" onSubmit={handleSearch}>
        <input
          className="form-control"
          type="search"
          maxLength={45}
          value={searchquery}
          onChange={handleChange}
          placeholder="Search your todos"
          aria-label="Search"
        />
      </form>
    </nav>
  );
}

export default Navbar;

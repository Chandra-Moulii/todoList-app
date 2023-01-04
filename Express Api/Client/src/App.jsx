import { useState, useEffect } from "react";
import axios from "axios";
import "./assets/style.css";

function App() {
  const url = "http://localhost:3001/api/users";
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    const { data } = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="App">
      {data.length > 0 ? <h1>List of users</h1> : <h1>Something went wrong</h1>}
      {data.map(({ id, fullName, age }) => {
        return (
          <p key={id}>
            {fullName} of age {age}
          </p>
        );
      })}
    </div>
  );
}

export default App;

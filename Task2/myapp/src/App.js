import React from "react";
import { useState } from "react";
import "./styles.css";
import Card from "./add/card";
import Hero from "./add/hero";
import Loader from "./add/loader";

function App() {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const fetchUsers = async () => {
    setisBtnClick(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonres = await response.json();
    setUsers(jsonres.data);
    setInterval(() => {
      setisDataFetch(true);
    }, 1200);
  };

  return (
    <>
      <div className="header">
        <span className="logo">Alacrity</span>
        <button onClick={fetchUsers}>Get Users</button>
      </div>

      {isBtnClick ? (
        isDataFetch ? (
          <Card users={users} />
        ) : (
          <Loader />
        )
      ) : (
        <Hero />
      )}
    </>
  );
}

export default App;

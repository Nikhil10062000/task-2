import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dish from "./Component/Dish";
import Cart from "./Component/Cart";
import database from "./Component/db";
import Login from "./Component/Login";

function App() {
  const [data] = useState(database);

  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const [check, setCheck] = useState("");
  const [password, setpassword] = useState("");

  let obj = data.find((o) => o.username === check);

  const [login, setLogin] = useState(true);

  return (
    <div className="App">
      {login ? (
        <Login
          setUser={setUser}
          setLogin={setLogin}
          check={check}
          password={password}
          user={user}
          setpassword={setpassword}
          pass={pass}
          setPass={setPass}
          setCheck={setCheck}
          obj={obj}
        />
      ) : (
        <Routes>
          <Route index element={<Dish />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

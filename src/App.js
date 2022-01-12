import React from "react";
import Header from "./Header";
import AddProducts from "./AddProducts";
import UpdateProduct from "./UpdateProduct";
import Login from "./Login";
import Register from "./Register";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
        <Header />
      <Routes>
        <Route path="/add" element={<AddProducts/>}></Route>
        <Route path="/update" element={<UpdateProduct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

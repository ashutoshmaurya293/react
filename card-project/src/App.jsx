import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import {Toaster} from "react-hot-toast"
import Cart from "./Components/Cart";


function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/cart" element={<Cart/>}/>
</Routes>
<Toaster/>
</BrowserRouter>
  );
}

export default App;

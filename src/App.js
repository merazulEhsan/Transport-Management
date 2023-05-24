import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import Drivers from "./components/Drivers";
import Profile from "./components/Profile";
import AdminLogin from "./components/AdminLogin";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/" element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="booking" element={<Home />}></Route>
          <Route path="drivers" element={<Drivers />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

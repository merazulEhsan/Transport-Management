import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
                <Route path="/"
                    element={
                        <Login></Login>
                }></Route>

                <Route path="/adminLogin"
                    element={
                        <AdminLogin></AdminLogin>
                }></Route>
                <Route path="/signup"
                    element={
                        <SignUp></SignUp>
                }></Route>


                <Route path="/home"
                    element={
                        <Navbar></Navbar>
                }>
                    <Route path="dashboard"
                        element={
                            <Dashboard></Dashboard>
                    }></Route>
                    <Route path="booking"
                        element={
                            <Home></Home>
                    }></Route>
                    <Route path="drivers"
                        element={
                            <Drivers></Drivers>
                    }></Route>
                    <Route path="profile"
                        element={
                            <Profile></Profile>
                    }></Route>
                    <Route path="contact"
                        element={
                            <Contact></Contact>
                    }></Route>
                </Route>
            </Routes>


        </BrowserRouter>


    );
}

export default App;

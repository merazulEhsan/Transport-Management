import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusRoutes from "./components/Routes";
import Login from "./components/Login";
import Home from "./components/Home";
import Drivers from "./components/Drivers";
import Profile from "./components/Profile";
import AdminLogin from "./components/AdminLogin";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import About from "./components/About";
import AdminNavbar from "./components/adminPanel/AdminNavbar";
import ManageUsers from "./components/adminPanel/ManageUsers";
import AdminDashboard from "./components/adminPanel/Dashboard";
import AddAdmin from "./components/adminPanel/AddAdmin";
import AddRoute from "./components/adminPanel/AddRoute";
import NotFound from "./components/NotFound";
import UserVerification from "./components/hooks/UserVerification";
import RequireAdmin from "./components/hooks/RequireAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route
          path="/"
          element={
            <UserVerification>
              <Navbar />
            </UserVerification>
          }
        >
          <Route path="routes" element={<BusRoutes />}></Route>
          <Route path="booking" element={<Home />}></Route>
          <Route path="drivers" element={<Drivers />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminNavbar />
            </RequireAdmin>
          }
        >
          <Route path="addadmin" element={<AddAdmin />}></Route>
          <Route path="manageusers" element={<ManageUsers />}></Route>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="addroute" element={<AddRoute />}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

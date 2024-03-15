import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AdminLogin from "./components/AdminLogin";
import Contact from "./components/Contact";
import Drivers from "./components/Drivers";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import BusRoutes from "./components/Routes";
import SignUp from "./components/SignUp";
import AddAdmin from "./components/adminPanel/AddAdmin";
import AddRoute from "./components/adminPanel/AddRoute";
import AdminNavbar from "./components/adminPanel/AdminNavbar";
import AdminDashboard from "./components/adminPanel/Dashboard";
import ManageUsers from "./components/adminPanel/ManageUsers";
import RequireAdmin from "./components/hooks/RequireAdmin";
import UserVerification from "./components/hooks/UserVerification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route
          path="/s"
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

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";

const Layout = () => {
  const [userAdmin, setUserAdmin] = useState(false);

  useEffect(() => {
    if (!userAdmin && localStorage.getItem("userAdmin")) {
      setUserAdmin(localStorage.getItem("userAdmin"));
    }
  }, []);
  return (
    <>
      <header className="bg-second-color min-h-[100vh]">
        <Navbar />
        {userAdmin ? (
          <Outlet userAdmin={userAdmin} setUserAdmin={setUserAdmin} />
        ) : (
          <Login userAdmin={userAdmin} setUserAdmin={setUserAdmin} />
        )}
      </header>
    </>
  );
};

export default Layout;

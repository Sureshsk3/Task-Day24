import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink,useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function NavBar() {
  const {pathname} = useLocation()

  return (
    <div id="nav-all">
      <Nav activeKey="/"  id="nav-items" >
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn" >
          <NavLink to="/" className={`${pathname==='/'?'active':'nav-item'}`}><FaHome style={{fontSize:'2rem'}} /></NavLink>
      </Nav.Item>
      </Nav>
      <Nav activeKey="/"  id="nav-items">
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/fsd-page" className={`${pathname==='/fsd-page'?'active':'nav-item'}`}>FULL STACK DEVELOPEMENT</NavLink>
      </Nav.Item>
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/datasci-page"className={`${pathname==='/datasci-page'?'active':'nav-item'}`} >DATA SCIENCE</NavLink>
      </Nav.Item>
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/cybersec-page" className={`${pathname==='/cybersec-page'?'active':'nav-item'}`}>CYBER SECURITY</NavLink>
      </Nav.Item>
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/career-page" className={`${pathname==='/career-page'?'active':'nav-item'}`}>CAREER</NavLink>
      </Nav.Item>
      
      </Nav>
    </div>
  );
}

export default NavBar;

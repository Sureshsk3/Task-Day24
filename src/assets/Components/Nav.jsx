import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function NavBar() {
  

  return (
    <div id="nav-all">
      <Nav activeKey="/"  id="nav-items" >
      <Nav.Item  className="mt-3 px-3 mx-3 active" >
          <NavLink to="/" style={{color:'#fff',textDecoration:'none'}}><FaHome style={{fontSize:'2rem'}} /></NavLink>
      </Nav.Item>
      </Nav>
      <Nav activeKey="/"  id="nav-items">
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/fsd-page" style={{color:'#fff',textDecoration:'none'}}>FULL STACK DEVELOPEMENT</NavLink>
      </Nav.Item>
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/datasci-page" style={{color:'#fff',textDecoration:'none'}}>DATA SCIENCE</NavLink>
      </Nav.Item>
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/cybersec-page" style={{color:'#fff',textDecoration:'none'}}>CYBER SECURITY</NavLink>
      </Nav.Item>
      <Nav.Item  className="mt-3 px-3 mx-3 active-btn">
          <NavLink to="/career-page" className='active' style={{color:'#fff',textDecoration:'none'}}>CAREER</NavLink>
      </Nav.Item>
      
      </Nav>
    </div>
  );
}

export default NavBar;

import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //red line in navbar underlines what is clicked

  const [menu, setMenu] = useState("store 2");

  return (

    <div className='navbar'>
      <div className='navbar-header'>
        <h1>Store Inventory Manager</h1>
      </div>
      <ul className='nav-menu'>
        <li>
    
            Store 2
        

        </li>

      </ul>
    </div>
  );
};

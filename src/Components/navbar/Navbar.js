import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav container-fluid">
      <div className="row">
        <nav className="navbar navbar-dark bg-dark">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/shop">
                shop
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/review">
                review order
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/inventory">
                inventory
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

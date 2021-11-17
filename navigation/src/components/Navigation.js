import "./App.css";
import { Link } from "react-router-dom";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import menuData from "../data/MenuData";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={toggleMenu} />
          </Link>
        </div>
      </div>
      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-bar-item" onClick={toggleMenu}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <FaArrowLeft onClick={toggleMenu} />
            </Link>
          </li>
          {menuData.map((menu, index) => {
            return (
              <li className="menu-text" key={index}>
                <Link to={menu.path}>
                  {menu.icon}
                  <span>{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;

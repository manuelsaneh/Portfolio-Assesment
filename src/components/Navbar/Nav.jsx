import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "/about",
      title: "About",
    },
    {
      id: "/projects",
      title: "Projects",
    },
    {
      id: "/contact",
      title: "Contact",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/" className="navbar_link-name">
          <p>Manuel Saneh</p>
        </Link>
        <ul className="navbar_list">
          {navLinks.map((link) => (
            <Link to={link.id} key={link.id}>
              <li key={link.id} className="navbar_list-links">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* mobile nav */}
        <div className="navbar_smallscreen">
          <CiMenuBurger
            color="#191717"
            fontSize={27}
            onClick={() => setToggle(true)}
          />
          {toggle && (
            <div className="navbar_smallscreen-overlay slide_bottom flex_center">
              <IoCloseOutline
                fontSize={27}
                className="close"
                onClick={() => setToggle(false)}
              />
              <ul className="navbar_smallscreen-list">
                {navLinks.map((link) => (
                  <Link to={link.id} key={link.id}>
                    <li key={link.id} className="navbar_smallscreen-links">
                      {link.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

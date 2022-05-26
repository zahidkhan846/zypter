import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { address: "/market", name: "Market" },
    { address: "/exchange", name: "Exchange" },
    { address: "/tutorials", name: "Tutorials" },
    { address: "/wallets", name: "Wallets" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar main-bg">
        <img src={Logo} alt="logo" />
        <nav className="navbar-nav">
          <ul className="nav-items">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
            <button className="nav-button">Login</button>
          </ul>
          {!menuOpen ? (
            <button className="menu-button" onClick={handleMenuOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          ) : (
            <button className="menu-button" onClick={handleMenuClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          )}
        </nav>
      </header>
      {menuOpen && (
        <ul className="menu-items">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} isMenuOpen={menuOpen} />
          ))}
          <button className="nav-button">Login</button>
        </ul>
      )}
    </>
  );
};

export default Navbar;

const NavItem = ({ item, isMenuOpen }) => {
  return (
    <li className={`${isMenuOpen ? "menu-item" : "nav-item"}`}>
      <Link to={item.address}>{item.name}</Link>
    </li>
  );
};

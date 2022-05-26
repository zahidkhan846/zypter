import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

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
      <header className="navbar">
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
              <GiHamburgerMenu color="#f4f4f4" size={24} />
            </button>
          ) : (
            <button className="menu-button" onClick={handleMenuClose}>
              <VscChromeClose color="#f4f4f4" size={24} />
            </button>
          )}
        </nav>
      </header>
      {menuOpen && (
        <ul className="menu-items">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} isMenuOpen={menuOpen} />
          ))}
          <button className="nav-button menu-nav-button">Login</button>
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

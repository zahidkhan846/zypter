import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { address: "/market", name: "Market" },
    { address: "/exchange", name: "Exchange" },
    { address: "/tutorials", name: "Tutorials" },
    { address: "/wallets", name: "Wallets" },
  ];

  return (
    <header className="navbar main-bg">
      <img src={Logo} alt="logo" />
      <nav className="navbar-nav">
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

const NavItem = ({ item }) => {
  return (
    <li>
      <Link to={item.address}>{item.name}</Link>
    </li>
  );
};

import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

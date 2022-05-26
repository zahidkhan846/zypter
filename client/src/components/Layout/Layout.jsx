import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className="main-bg">
      <div className="container">
        <Navbar /> <div className="children">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;

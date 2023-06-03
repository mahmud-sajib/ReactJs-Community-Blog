import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">Community Blog</Link>
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

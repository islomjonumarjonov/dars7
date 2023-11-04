import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Navbar() {
  const { likedImages } = useContext(GlobalContext);
  console.log(likedImages.length);
  return (
    <div className="navbar container">
      <h3 className="logo">Unsplash</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/likedImages">
          Likes
          <span className="badge">{likedImages.length}</span>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/">
        <h1>My Site</h1>
      </Link>
      <div className="links">
        <Link to="/">Blogs</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
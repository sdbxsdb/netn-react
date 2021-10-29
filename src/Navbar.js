import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/">
        <h1>My Site</h1>
      </Link>
      <div className="links">
<<<<<<< HEAD
        <Link to="/">Blog</Link>
=======
        <Link to="/">Blogs</Link>
>>>>>>> dec03ee6231939b338b61ba3de164dcf35fa1b66
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
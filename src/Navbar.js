import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/">
        <h1>Sam Donaghy-Bell</h1>
      </Link>
      <div className="links">
        <Link to="/about">About Me</Link>
        {/* <Link to="/create">New Blog</Link> */}
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
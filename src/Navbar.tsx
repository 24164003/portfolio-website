import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar-parent-style">
      <div className='navbar-first-child oswald-bold'>
        <Link to="/" className='navbar-link'>
          <span>SHONAL MARIA</span>
        </Link>
      </div>
      <div className='navbar-second-child monospace;'>
        <Link to="/about" className='navbar-link'>
          <span>About</span>
        </Link>
        <Link to="/blog" className='navbar-link'>
          <span>Blog</span>
        </Link>
        <Link to="/portfolio" className='navbar-link'>
          <span>Portolio</span>
        </Link>
        <Link to="/gallery" className='navbar-link'>
          <span>Gallery</span>
        </Link>
      </div>
    </Navbar>
  );
}

export default NavScrollExample;
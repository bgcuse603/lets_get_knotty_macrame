import { Link } from 'react-router-dom';
import '../assets/css/Nav.css';

export default function Nav({headerLinkStyle}) {
  return (
    <div className='nav'>
      <Link to='/' style={headerLinkStyle}>Home</Link>
      <Link to='/about'style={headerLinkStyle}>About</Link>
      <Link to='/products'style={headerLinkStyle}>Products</Link>
      <Link to='/contact'style={headerLinkStyle}>Contact</Link>
    </div>
  )
}

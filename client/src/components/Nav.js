import { Link } from 'react-router-dom';
import '../assets/css/Nav.css';

export default function Nav({headerLinkStyle, currentUser, handleLogout, location}) {
  return (
    <div className='nav'>
      <Link to='/' style={headerLinkStyle}>Home</Link>
      <Link to='/about'style={headerLinkStyle}>About</Link>
      <Link to='/products'style={headerLinkStyle}>Products</Link>
      <Link to='/contact' style={headerLinkStyle}>Contact</Link>
      {location.pathname === "/" ?
        (<div> </div>) :
        (<div>
          {currentUser ? (
            <div className='signInToggle'>
              <h1>Hi, {`${currentUser.username}`}</h1>
              <button onClick={handleLogout}>Logout</button>
              {/* <Link to='/register'>
                <button>Register New User</button>
              </Link> */}
            </div>
            ) : (
              <Link to='/signin' style={headerLinkStyle}>Sign In</Link>
          )}
        </div>)}
    </div>
  )
}

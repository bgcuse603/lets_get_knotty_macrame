import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/Nav.css';
import macrameICON from '../assets/images/macrameICON.png';

export default function Nav({ headerLinkStyle, currentUser, handleLogout, location }) {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <div className='nav'>
      <div className='navFULL'>
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
      <div className='navicon' onClick={handleDisplay}> 
        <img src={macrameICON} alt="leaf" className="navicon"></img>
      </div>
      <div className={ display ? 'menuShow' : 'menuHidden'}>
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
        <Link to='/' style={headerLinkStyle}>Home</Link>
        <Link to='/about'style={headerLinkStyle}>About</Link>
        <Link to='/products'style={headerLinkStyle}>Products</Link>
        <Link to='/contact' style={headerLinkStyle}>Contact</Link>
      </div>
    </div>
  )
}

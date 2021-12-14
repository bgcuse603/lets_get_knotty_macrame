import { Link, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import '../assets/css/Layout.css';
import LGKlogo from '../assets/images/LGKlogo.jpeg';


export default function Layout({ currentUser, handleLogout, children }) {
  const location = useLocation();

  const headerLinkStyle = {
    color: "#F9D8B7",
    textDecoration: "none",
    fontFamily: "Zeyada",
    fontSize: "30px",
    margin: "5px",
  };
  
  return (
    <div>
      <header>
        <div className='mainHeader'>
          {location.pathname === "/" ? (
            <div> </div>) :
            (<div className='mainHeaderText'>
              <h1 className='zeyada'>Lets Get Knotty...  </h1>
              <h2 className='raleway'>MACRAMÉ</h2>
              </div>)}
          { currentUser ? (
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
        </div>
        <div className='subheader'>
          {location.pathname === "/" ? (<img src={LGKlogo} height='300' />) : (<div/>)}
        </div>
      </header>
      <section>
        <Nav headerLinkStyle={headerLinkStyle}/>
      </section>
      {children}

    </div>
  )
}

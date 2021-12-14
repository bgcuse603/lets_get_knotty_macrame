import { Link, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import '../assets/css/Layout.css';

export default function Layout({ currentUser, handleLogout, children }) {
  const location = useLocation();
  
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
            <div>
              <p>Hi, {`${currentUser.username}`}</p>
              <button onClick={handleLogout}>Logout</button>
              {/* <Link to='/register'>
                <button>Register New User</button>
              </Link> */}
            </div>
            ) : (
              <Link to='/signin'>Sign In</Link>
          )}
        </div>
        <div className='subheader'>
          {location.pathname === "/" ? (<img src='https://i.imgur.com/VyBhgBU.jpg' height='500' />) : (<img src=''/>)}
        </div>
      </header>
      <section>
        <Nav />
      </section>
      {children}

    </div>
  )
}

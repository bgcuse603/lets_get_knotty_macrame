import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Layout({ currentUser, handleLogout, children }) {
  
  return (
    <div>
      <header>
        <h1>Lets Get Knotty</h1>
        <h2>macramé</h2>
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
        
      </header>
      <section>
        <Nav />
      </section>
      {children}

    </div>
  )
}

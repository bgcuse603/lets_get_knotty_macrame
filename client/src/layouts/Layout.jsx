import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>Lets Get Knotty</h1>
        <h2>macramé</h2>
        <Link to='/signin'>Sign In</Link>
      </header>
      {props.children}
    </div>
  )
}

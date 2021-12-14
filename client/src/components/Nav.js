import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

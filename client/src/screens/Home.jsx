import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import iconEarring from '../assets/images/iconEarring.png';
import iconPlantHanger from '../assets/images/iconPlantHanger.png';
import iconWallHanger from '../assets/images/iconWallHanger.png';


export default function Home() {
  return (
    <div className='homeDiv'>
      <div className='homeIconBlock'>
        <Link to='products'>
          <img src={iconWallHanger} height='200vh'alt='macrameicon'/>
        </Link>
        <h1>Wall Hangers</h1>
      </div>
      <div className='homeIconBlock'>
        <Link to='products'>
          <img src={iconPlantHanger} height='200vh' alt='plantHangericon'/>
        </Link>
        <h1>Plant Hangers</h1>
      </div>
      <div className='homeIconBlock'>
        <Link to='products'>
          <img src={iconEarring} height='200vh' alt='wheelicon' />
        </Link>
        <h1>Earrings</h1>
      </div>
    </div>
  )
}

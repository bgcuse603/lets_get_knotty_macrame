import '../assets/css/Home.css';
import iconEarring from '../assets/images/iconEarring.png';
import iconPlantHanger from '../assets/images/iconPlantHanger.png';
import iconWallHanger from '../assets/images/iconWallHanger.png';


export default function Home() {
  return (
    <div className='homeDiv'>
      <div className='homeIconBlock'>
        <img src={iconWallHanger} height='200vh'/>
        <h1>Wall Hangers</h1>
      </div>
      <div className='homeIconBlock'>
        <img src={iconPlantHanger} height='200vh' />
        <h1>Plant Hangers</h1>
      </div>
      <div className='homeIconBlock'>
        <img src={iconEarring} height='200vh' />
        <h1>Earrings</h1>
      </div>
    </div>
  )
}

import '../assets/css/About.css';
import courtneyI from '../assets/images/courtneyI.jpg';


export default function About() {
  return (
    <div className="aboutDiv">

      <div className='aboutTitle'>
        <h1>About</h1>
      </div>

      <div className="aboutMain">
        <div className="imgBox">
          <img src={courtneyI} alt="courtney" width="400vw" height="400vh"></img>
        </div>
        <div className="textBox">
          <h1>Lets Get Knotty MACRAMÉ</h1>
          <p>
            A New Hampshire based small business. Owned and operated by Courtney Irzyk.
          </p>
        </div>
      </div>

    </div>
  )
}

import '../assets/css/Contact.css';
import LGKinsp from '../assets/images/LGKinsp.jpg';


export default function About() {
  return (
    <div className="contactDiv">

      <div className='contactTitle'>
        <h1>Contact</h1>
      </div>

      <div className="contactMain">
        <div className="imgBox">
          <img src={LGKinsp} alt="insp" width="400vw" height="400vh"></img>
        </div>
        <div className="textBox">
          <h3>Lets Get Knotty MACRAMÉ</h3>
          <h2>Manchester, New Hampshire</h2>
          <h4>
          For orders and custom inquiries, text <br/> 603-731-8808  
          </h4>
        </div>
      </div>

    </div>
  )
}

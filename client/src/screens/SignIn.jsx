import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SignIn.css';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const formtextbox = {
    color: "#F9D8B7",
    fontFamily: "Raleway",
    fontSize: "20px",
    margin: "5px",
  }
  
  return (
    <form className='signInForm' onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h1>Sign In</h1>
      <label>
        <input
          type='text'
          name='username'
          value={username}
          placeholder='Username'
          style={formtextbox}
          onChange={handleChange}
        />
      </label>
      <label> 
        <input
          type='password'
          name='password'
          value={password}
          placeholder='Password'
          style={formtextbox}
          onChange={handleChange}
        />
      </label>
      <button className='signInScreenButton'>Sign In</button>
      <Link to='/home'></Link>
    </form>
  )
}

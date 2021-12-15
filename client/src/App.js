import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './screens/Home';
import About from './screens/About';
import SignIn from './screens/SignIn';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }  
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData);
    history.push('/')
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
        <Route path='/contact'>
            <h1>CONTACT</h1>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/signin'>
            <SignIn handleLogin={handleLogin}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path='/products'>
            <MainContainer currentUser={ currentUser }/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

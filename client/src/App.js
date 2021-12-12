import './App.css';
import Layout from './layouts/Layout';
import SignIn from './screens/SignIn';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter as Router,Link,Switch,Route} from'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

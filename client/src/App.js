import './App.css'
import Home from './Components/Home';
import ViewUser from './Components/ViewUser';
import Navbar from './Components/Navbar';
import SingleUser from './Components/SingleUser';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import TransferMoney from './Components/TransferMoney';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/viewuser">
         <ViewUser/>
        </Route>
        <Route path="/singleuser/:_id">
           <SingleUser/>
        </Route>
        <Route path="/transfermoney">
           <TransferMoney/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

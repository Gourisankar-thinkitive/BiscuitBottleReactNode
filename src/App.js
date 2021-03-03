import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Prop from './components/Prop';
import Seller from './components/Seller/Seller'
import Add from './components/Seller/Add'
import Modify from './components/Seller/Modify'
import Buyer from './components/Buyer/Buyer'


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route path='/seller' exact  component={Seller}></Route>
          <Route path='/buyer' exact  component={Buyer}></Route>
          <Route path='/addproduct' exact component={Add}></Route>
          <Route path='/modify' exact  component={Modify}></Route>
          <Route path='' exact  component={Prop}></Route>

        </Switch>
      </Router>
  
    </div>
  );
}

export default App;

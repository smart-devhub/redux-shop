
import './App.css';

import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      
      <div>
        <Nav/>
      <Route exact path='/' component={Home} />
      <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}

export default App;

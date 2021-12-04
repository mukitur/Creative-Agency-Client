import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/portfolio">
                <Portfolio></Portfolio>
            </Route>
            <Route path="/contact">
                <Contact></Contact>
            </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

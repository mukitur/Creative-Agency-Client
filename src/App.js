import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Portfolio from './Pages/Portfolio/Portfolio';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <AuthProvider>
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
                  <Portfolio/>
              </Route>
              <Route path="/contact">
                  <Contact></Contact>
              </Route>
              <Route path="/login">
                  <Login></Login>
              </Route>
              <Route path="/register">
                  <Register></Register>
              </Route>
              <Route path="/addservice">
                  <AddServices/>
              </Route>
              <PrivateRoute path="/dashboard">
                  <Dashboard/>
              </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;

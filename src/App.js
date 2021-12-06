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
import WeOffer from './Pages/WeOffer/WeOffer';
import ServiceDetails from './Pages/ShowServices/ServiceDetails';
import OrderNow from './Pages/AllOrder/OrderNow/OrderNow';


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
              <Route path="/weoffer">
                  <WeOffer/>
              </Route>
              <Route path="/services/:serviceId">
                  <ServiceDetails/>
              </Route>
              <PrivateRoute path="/ordernow">
                  <OrderNow/>
              </PrivateRoute>
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

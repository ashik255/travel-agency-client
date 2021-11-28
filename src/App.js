import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import NotFound from './notFound/NotFound';
import Carosel from './pages/carosel/Carosel';
import Home from './pages/home/Home';
import Login from './pages/login/Login/Login';
import MyOrder from './pages/My Order/MyOrder';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import Services from './pages/services/Services';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/detail/:serviceId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/myorder"> 
            <MyOrder></MyOrder>
            </Route>
            <Route path ='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;

import './App.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Link,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import CustomerRegister from './components/CustomerRegister';
import CustomerLogin from './components/CustomerLogin'
import Contactus from './components/Contactus';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './assets/duplex.png';
import MovieadminDashboard from './components/Movieadmindashboard';
import  Addmovie  from './components/Addmovies';
import SystemAdminDashboard from './components/SystemAdminComponent/SystemAdminDashboard';
import Addshowtime from './components/Addshowtime';
import Adminpivot from './components/Adminpivot';
import Movieedit from './components/Movieedit';
import Movieview from './components/Movieview';
import Showtimeview from './components/Showtimeview'; 
import ViewAdmin from './components/SystemAdminComponent/MovieAdmin/ViewAdmin';
import NewUser from './components/SystemAdminComponent/NewUser';
import MAdminlogin from './components/MAdminlogin';
import Login from './components/SystemAdminComponent/Login/Login';


  
function App() {
  return (
    <div className="App">
    
      <Router>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">DUPLEX CINEMA</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/contactus">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/userlogin">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/usersignup">
                Sign up
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
          <Routes>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/userlogin" element={<CustomerLogin />}></Route>
            <Route path="/usersignup" element={<CustomerRegister />}></Route>

            <Route path="/cart" element={<Cart />}></Route>

            <Route exact path='/' element={<Home></Home>}></Route>
            <Route path="/movieadmindashboard" element={<MovieadminDashboard></MovieadminDashboard>}></Route>
            <Route path="/addmovie" element={<Addmovie></Addmovie>}></Route>
            <Route path="/systemadmindashboard" element={<SystemAdminDashboard></SystemAdminDashboard>}></Route>
            
            <Route path="/addshowtime" element={<Addshowtime></Addshowtime>}></Route>
            <Route path="/adminpivot" element={<Adminpivot></Adminpivot>}></Route>
            <Route path="/movieedit" element={<Movieedit></Movieedit>}></Route>
            <Route path='/movieview' element={<Movieview></Movieview>}></Route>
            <Route path='/showtimes' element={<Showtimeview></Showtimeview>}></Route>
            <Route path='/viewadmin' element={<ViewAdmin></ViewAdmin>}></Route> 
            <Route path='/sysadminlogin' element={<Login></Login>}></Route>  
            <Route path='/newuser' element={<NewUser></NewUser>}></Route>  
            <Route path='/madminlogin' element={<MAdminlogin></MAdminlogin>}></Route>
          </Routes>
        
      
      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">DUPLEX CINEMA<span></span></h5>
                  <p>Duplex Cinemas is Sri Lanka's first and largest six-screen multiplex, providing local moviegoers with a world-class cinematic experience. The multiplex opened its doors to movie enthusiasts and cinephiles of all ages in the Colombo City Centre in 2018, equipped with cutting-edge technology and services.</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">Admin Portal<span></span></h5>
                    <Button variant="warning"
                      as={Link}
                      to="/adminpivot">
                      Login as Admin
                    </Button>
                    <Button variant="warning"
                      as={Link}
                      to="/movieview">
                      Movie view
                    </Button>
                </div>

                <div class="widget no-box">
                  <h5 class="widget-title">Admin Portal<span></span></h5>
                    <Button variant="warning"
                      as={Link}
                      to="/systemadmindashboard">
                      System Admin Dashboard
                    </Button>
                </div>
                
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <img className="img-responsive" src={logo} alt="logo" height={'500px'} width={'500px'}></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>DUPLEX CINEMA © 2022. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </Router>
    </div>

  );
}

export default App;
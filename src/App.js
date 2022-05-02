import './App.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Link,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import Contactus from './components/Contactus';
import Userlogin from './components/Userlogin';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './assets/duplex.png';

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
            </Nav>
          </Container>
        </Navbar>
        
          <Routes>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/userlogin" element={<Userlogin />}></Route>
            <Route path="/usersignup" element={<Register />}></Route>
            <Route exact path='/' element={<Home></Home>}></Route>
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
                      to="/userlogin">
                      Login as Admin
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
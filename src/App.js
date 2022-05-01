import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import Contactus from './components/Contactus';
import Userlogin from './components/Userlogin';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/home">DUPLEX CINEMA</Navbar.Brand>
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
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/userlogin" element={<Userlogin />}></Route>
            <Route path="/usersignup" element={<Register />}></Route>
          </Routes>
        </Router>
            
    </div>

  );
}

export default App;
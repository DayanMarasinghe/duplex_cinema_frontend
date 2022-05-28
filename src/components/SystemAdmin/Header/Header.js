import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate} from "react-router-dom"

function Header({setSearch}) {

  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">System Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
          <NavDropdown title="Ruvini" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/sysdashboard">Account</NavDropdown.Item>
              <NavDropdown.Item href="/displaymovies">Movies</NavDropdown.Item>
              <NavDropdown.Item href="/movieadmins">
                Movie Admins
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{
                localStorage.removeItem("userInfo"); 
                navigate("/")
              }}>
               Logout
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

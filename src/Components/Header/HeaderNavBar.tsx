
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "./Header.css";

function HeaderNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      if (!collapsed) {
        setCollapsed(true);
      }
    }
  }


  return (
    <div>
      <div>
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={!collapsed}>
          <Container>
            <Navbar.Brand href="/">Fhloston Paradise</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Book">Book</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="Header">
        <p>Welcome to Fhloston Paradise!</p>
      </div>
    </div>
  );
}

export default HeaderNavbar;
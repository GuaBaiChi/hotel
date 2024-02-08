import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./HeaderNavBar.css";
import { Link } from "react-router-dom";


function HeaderNavbar() {
  const [collapsed, setCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [brandText, setBrandText] = useState("Fhloston Paradise");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
        setBrandText("~FP~");
      } else {
        setIsScrolled(false);
        setBrandText("Fhloston Paradise");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <Navbar
          expand="lg"
          className={`${isScrolled ? "scrolled" : ""} main-navbar`}
          fixed="top"
          expanded={!collapsed}
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/" className="brand-text">{brandText}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/book">Book</Nav.Link>
                <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
                <Nav.Link as={Link} to="/dining">Dining</Nav.Link>
                <Nav.Link as={Link} to="/spa">Spa</Nav.Link>

              </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse id="language-navbar-nav">
              <Nav className="ml-auto">
                <NavDropdown title="Language" id="language-dropdown" className="language-dropdown">
                  <NavDropdown.Item>English</NavDropdown.Item>
                  <NavDropdown.Item>Spanish</NavDropdown.Item>
                  {/* Add more language options here */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderNavbar;
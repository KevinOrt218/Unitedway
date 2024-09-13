import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/images/Unitedway_logo.png";
import "../Navbar/NavBar.css";

function NavBar() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Navbar
        className="custom-navbar"
        fixed="top"
        bg="light"
        expand="lg" /* Expandir el navbar a partir de pantallas grandes */
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="unitedway logo"
              className="img-fluid"
              style={{ width: "250px", height: "auto" }}
            />
          </Navbar.Brand>

          {/* Toggle button for hamburger menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link
                href="#"
                onClick={() => handleClick("home")}
                className={activeSection === "home" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#company-section"
                onClick={() => handleClick("company")}
                className={activeSection === "company" ? "active-link" : ""}
              >
                Company
              </Nav.Link>
              <Nav.Link
                href="#services-section"
                onClick={() => handleClick("services")}
                className={activeSection === "services" ? "active-link" : ""}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#aboutus-section"
                onClick={() => handleClick("about")}
                className={activeSection === "about" ? "active-link" : ""}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#contact-section"
                onClick={() => handleClick("contact")}
                className={activeSection === "contact" ? "active-link" : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

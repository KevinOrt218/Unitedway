import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/images/Unitedway_logo.png";
import "../Navbar/NavBar.css";

function NavBar() {
  const [activeSection, setActiveSection] = useState(null); // Estado para la sección activa

  const handleClick = (section) => {
    setActiveSection(section); // Cambia la sección activa al hacer clic
  };

  return (
    <>
      <Navbar
        className="custom-navbar"
        fixed="top"
        bg="light"
        data-bs-theme="light"
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
              AboutUs
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleClick("contact")}
              className={activeSection === "contact" ? "active-link" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

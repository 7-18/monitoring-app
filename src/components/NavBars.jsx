import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { SpanLogo } from "../styles/GlobalStyles";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export const NavBars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="flex-column">
      <Container fluid className="justify-content-center">
        <SpanLogo>Universidad de la Vida</SpanLogo>
      </Container>
      <Container fluid>
        <Navbar.Brand className="d-lg-none">
          <img src={logo} alt="logo" width={40} as={Link} to="/" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="align-items-center w-100 justify-content-around">
            <span className="text-lg-center text-muted d-flex flex-column align-items-center">
              <CgProfile />
              <small style={{ fontSize: "10px" }}>Coordinador</small>
              <small
                style={{ fontSize: "10px", width: "40px" }}
                className="text-truncate"
              >
                Kevin Briceño
              </small>
            </span>
            <Nav className="align-items-center">
              <NavDropdown
                title="Monitores"
                id="collasible-nav-dropdown"
                className="me-lg-5"
              >
                <NavDropdown.Item
                  className="text-lg-center text-muted py-lg-2"
                  as={Link}
                  to="/monitors"
                >
                  Ver monitores
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-lg-center text-muted py-lg-2"
                  as={Link}
                  to="/monitors"
                >
                  Agregar monitores
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Brand
                className="d-none d-lg-block mx-lg-2"
                as={Link}
                to="/"
              >
                <img src={logo} alt="logo" width={40} />
              </Navbar.Brand>
              <NavDropdown
                title="Monitorías"
                id="collasible-nav-dropdown"
                className="ms-lg-5"
              >
                <NavDropdown.Item
                  className="text-lg-center text-muted py-lg-2"
                  as={Link}
                  to="/monitoring"
                >
                  Ver monitorías
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-lg-center text-muted py-lg-2"
                  as={Link}
                  to="/monitoring"
                >
                  Crear monitorías
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <span className="text-lg-center text-muted d-flex flex-column align-items-center">
              <FiLogOut />
              <small style={{ fontSize: "10px" }}>Logout</small>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

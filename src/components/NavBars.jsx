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
            <span className="d-none d-lg-flex text-lg-center text-muted d-flex flex-column align-items-center">
              <CgProfile />
              <small>Coordinador</small>
              <small style={{ width: "40px" }} className="text-truncate">
                Kevin Briceño
              </small>
            </span>
            <Nav className="align-items-center">
              <NavDropdown
                title="Monitores"
                id="collasible-nav-dropdown"
                className="me-lg-5 me-0"
              >
                <NavDropdown.Item
                  className="text-lg-center text-muted py-lg-2"
                  as={Link}
                  to="/list-monitors"
                >
                  Ver monitores
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-lg-center text-muted py-lg-2"
                  as={Link}
                  to="/add-monitors"
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
                  to="/list-monitoring"
                >
                  Ver monitorías
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-lg-center text-muted py-lg-2"
                  as={Link}
                  to="/create-monitoring"
                >
                  Crear monitorías
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <span className="d-none d-lg-flex text-lg-center text-muted d-flex flex-column align-items-center logout">
              <FiLogOut />
              <small>Logout</small>
            </span>
            <div className="d-flex d-lg-none gap-5 my-3">
              <span className="text-lg-center text-muted d-flex flex-column align-items-center">
                <CgProfile />
                <small>Coordinador</small>
                <small style={{ width: "40px" }} className="text-truncate">
                  Kevin Briceño
                </small>
              </span>
              <span className="text-lg-center text-muted d-flex flex-column align-items-center">
                <FiLogOut />
                <small>Logout</small>
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

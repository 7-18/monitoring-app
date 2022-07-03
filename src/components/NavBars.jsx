import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { SpanLogo } from "../styles/GlobalStyles";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../redux/actions/actionUser";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const NavBars = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, []);

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
              {profile?.photoURL !== undefined || null ? (
                <img
                  src={profile?.photoURL}
                  alt="profile"
                  width={20}
                  className="rounded-circle"
                />
              ) : (
                <CgProfile />
              )}
              <small>Coordinador</small>
              <small style={{ width: "40px" }} className="text-truncate">
                {profile?.displayName}
              </small>
            </span>
            <Nav className="align-items-center" style={{ marginLeft: "-25px" }}>
              <Nav.Link as={Link} to="/search" className="d-lg-none d-block">
                Search
              </Nav.Link>
              <NavDropdown title="Monitores" id="collasible-nav-dropdown">
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
                className="d-none d-lg-block mx-lg-5"
                as={Link}
                to="/"
              >
                <img src={logo} alt="logo" width={40} />
              </Navbar.Brand>
              <NavDropdown title="Monitorías" id="collasible-nav-dropdown">
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
            <span
              className="d-none d-lg-flex text-lg-center text-muted d-flex flex-column align-items-center logout"
              onClick={() => dispatch(logoutUserAsync())}
            >
              <FiLogOut />
              <small>Salir</small>
            </span>
            <div className="d-flex d-lg-none gap-5 my-3">
              <span className="text-lg-center text-muted d-flex flex-column align-items-center">
                {profile?.photoURL !== undefined || null ? (
                  <img
                    src={profile?.photoURL}
                    alt="profile"
                    width={20}
                    className="rounded-circle"
                  />
                ) : (
                  <CgProfile />
                )}
                <small>Coordinador</small>
                <small style={{ width: "40px" }} className="text-truncate">
                  {profile?.displayName}
                </small>
              </span>
              <span
                className="text-lg-center text-muted d-flex flex-column align-items-center"
                onClick={() => dispatch(logoutUserAsync())}
              >
                <FiLogOut />
                <small>Salir</small>
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <SpanLogo className="d-none d-lg-block">
        <Link to="/register">Search</Link>
      </SpanLogo>
    </Navbar>
  );
};

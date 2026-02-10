import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function TopNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    <span className="bg-white text-dark px-2 py-1 me-2">Auto</span>
                    Scout24
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-nav" />

                <Navbar.Collapse id="main-nav">
                    <Nav className="me-auto mt-3 mt-lg-0 text-center text-lg-start align-items-center align-items-lg-start w-100 w-lg-auto">
                        <Nav.Link as={Link} to="/results">
                            Used and New Cars
                        </Nav.Link>
                        <Nav.Link as={Link} to="/results">
                            Motorbikes
                        </Nav.Link>
                    </Nav>

                    <Nav className="mt-2 mt-lg-0 d-flex flex-column flex-lg-row align-items-center align-items-lg-center text-center text-lg-start">
                        <Nav.Link as={Link} to="/favorites">
                            <i className="bi bi-star" />
                        </Nav.Link>

                        <NavDropdown title="English" id="lang-dropdown" align="end">
                            <NavDropdown.Item>English</NavDropdown.Item>
                            <NavDropdown.Item>Shqip</NavDropdown.Item>
                            <NavDropdown.Item>Deutsch</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

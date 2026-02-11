import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
    { to: "/results", label: "Used & New Cars" },
    { to: "/motorbikes", label: "Motorbikes" },
];

function AppNavLink({ to, label }) {
    return (
        <Nav.Link
            as={NavLink}
            to={to}
            end
            className={({ isActive }) =>
                [
                    "px-lg-3",
                    "py-2",
                    "d-inline-flex",
                    "align-items-center",
                    "rounded-2",
                    isActive ? "active fw-semibold" : "opacity-75",
                ].join(" ")
            }
        >
            {label}
        </Nav.Link>
    );
}

export default function TopNav() {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
            collapseOnSelect
            className="border-bottom border-dark-subtle shadow-sm py-3"
        >
            <Container fluid="lg">
                <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center gap-2">
                    <span>
                        Shqiponja<span className="opacity-75">Mbi</span>
                        <span className="opacity-75">Rrota</span>
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-nav" aria-label="Toggle navigation" />

                <Navbar.Collapse id="main-nav" className="mt-3 mt-lg-0">
                    <Nav className="me-auto gap-lg-1">
                        {NAV_LINKS.map((l) => (
                            <AppNavLink key={l.to} to={l.to} label={l.label} />
                        ))}
                    </Nav>

                    <Nav className="ms-lg-3 align-items-lg-center gap-2">

                        <NavLink
                            to="/login"
                            className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2 text-light"
                        >
                            <i className="bi bi-box-arrow-in-right" />
                            Login
                        </NavLink>

                        <NavLink
                            to="/register"
                            className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2 text-light"
                        >
                            <i className="bi bi-person-plus" />
                            Register
                        </NavLink>

                        <NavLink
                            to="/favorites"
                            className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2 text-light"
                        >
                            <i className="bi bi-star" />
                            Saved
                        </NavLink>

                        <NavDropdown
                            title={
                                <span className="d-inline-flex align-items-center gap-2">
                                    <i className="bi bi-globe2" />
                                    <span className="opacity-75">EN</span>
                                </span>
                            }
                            id="lang-dropdown"
                            align="end"
                            className="ms-lg-1"
                        >
                            <NavDropdown.Item active>English</NavDropdown.Item>
                            <NavDropdown.Item>Shqip</NavDropdown.Item>
                            <NavDropdown.Item>Deutsch</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

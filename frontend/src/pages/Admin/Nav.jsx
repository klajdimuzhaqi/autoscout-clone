import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Badge,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminNavbarUI() {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
            className="shadow-sm border-bottom border-secondary"
        >
            <Container fluid>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="fw-bold text-uppercase">
                    Auto
                    <span className="opacity-75">Scout24 </span>
                    • Admin
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="admin-navbar" />
                <Navbar.Collapse id="admin-navbar">
                    {/* Left Menu */}
                    <Nav className="me-auto">

                        <Nav.Link href="#">Dashboard</Nav.Link>

                        <NavDropdown title="Cars" id="cars-dropdown">
                            <NavDropdown.Item href="#">
                                All Cars
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Pending Approval{" "}
                                <Badge bg="warning" text="dark" className="ms-2">
                                    12
                                </Badge>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Brands & Models
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Features & Filters
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Listings" id="listings-dropdown">
                            <NavDropdown.Item href="#">
                                All Listings
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Reports
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#">
                            Users
                        </Nav.Link>

                        <Nav.Link href="#">
                            Messages{" "}
                            <Badge bg="danger" className="ms-2">
                                5
                            </Badge>
                        </Nav.Link>

                        <Nav.Link href="#">
                            Analytics
                        </Nav.Link>
                    </Nav>

                    {/* Search */}
                    <Form className="d-flex me-3">
                        <FormControl
                            size="sm"
                            type="search"
                            placeholder="Search (ID, plate, owner...)"
                            style={{ minWidth: 250 }}
                        />
                        <Button
                            size="sm"
                            variant="outline-light"
                            className="ms-2"
                        >
                            Search
                        </Button>
                    </Form>

                    {/* Profile */}
                    <Nav>
                        <NavDropdown title="Admin • Profile" align="end">
                            <NavDropdown.Item href="#">
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Settings
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
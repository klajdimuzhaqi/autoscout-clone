import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function TopNav() {
    return (
        <Navbar bg="dark" variant="dark" className="py-2">
            <Container>
                <Navbar.Brand className="fw-bold">
                    <span className="bg-white text-dark px-2 py-1 me-2">Auto</span>
                    Scout24
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#">Used and New Cars</Nav.Link>
                    <Nav.Link href="#">Motorbikes</Nav.Link>
                </Nav>

                <Nav className="ms-auto">
                    <Nav.Link href="#" className="d-flex align-items-center gap-2">
                        <i className="bi bi-star"></i>
                    </Nav.Link>
                    <Nav.Link href="#" className="d-flex align-items-center gap-2">
                        English <i className="bi bi-caret-down-fill"></i>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

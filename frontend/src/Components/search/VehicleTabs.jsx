import Nav from 'react-bootstrap/Nav';

export default function VehicleTabs() {
    return (
        <Nav variant="tabs" defaultActiveKey="cars">
            <Nav.Item>
                <Nav.Link eventKey="cars"><i className="bi bi-car-front"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="bikes"><i className="bi bi-bicycle"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="trucks"><i className="bi bi-truck"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="vans"><i className="bi bi-bus-front"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="trailers"><i className="bi bi-truck-flatbed"></i></Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

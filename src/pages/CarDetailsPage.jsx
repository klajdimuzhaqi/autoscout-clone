import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SuggestedCars from "../Components/details/SuggestedCars.jsx";
import { mockCars } from "../data/mockCars.js";


export default function CarDetailsPage() {
    const { id } = useParams();

    const car = useMemo(() => {
        const numId = Number(id);
        return mockCars.find((c) => c.id === numId);
    }, [id]);

    if (!car) {
        return (
            <div className="py-4">
                <h3>Offer not found</h3>
                <p className="text-muted">This vehicle does not exist.</p>
                <Button as={Link} to="/results" variant="primary">
                    Back to results
                </Button>
            </div>
        );
    }

    return (
        <div className="py-3">
            <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                <div>
                    <h2 className="mb-1">{car.title}</h2>
                    <div className="text-muted">{car.location}</div>
                    <div className="mt-2 d-flex gap-2 flex-wrap">
                        <Badge bg="secondary">{car.year}</Badge>
                        <Badge bg="secondary">{car.km.toLocaleString()} km</Badge>
                        <Badge bg="secondary">{car.fuel}</Badge>
                        <Badge bg="secondary">{car.gearbox}</Badge>
                    </div>
                </div>

                <div className="text-end">
                    <div className="fs-2 fw-bold">€ {car.price.toLocaleString()}</div>
                    <Button
                        as={Link}
                        to="/results"
                        variant="outline-secondary"
                        size="sm"
                        className="mt-2"
                    >
                        ← Back to results
                    </Button>
                </div>
            </div>

            <Row className="g-3 mt-2">
                <Col lg={8}>
                    <Card className="shadow-sm border-0 overflow-hidden">
                        <img
                            src={car.image}
                            alt={car.title}
                            style={{ width: "100%", height: 420, objectFit: "cover" }}
                        />
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="mb-3">Vehicle details</Card.Title>

                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Year</span>
                                    <span className="fw-semibold">{car.year}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Mileage</span>
                                    <span className="fw-semibold">
                                        {car.km.toLocaleString()} km
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Fuel</span>
                                    <span className="fw-semibold">{car.fuel}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Gearbox</span>
                                    <span className="fw-semibold">{car.gearbox}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Location</span>
                                    <span className="fw-semibold">{car.location}</span>
                                </ListGroup.Item>
                            </ListGroup>


                            <div className="mt-3 d-grid gap-2">
                                <Button variant="primary">Contact seller</Button>
                                <Button variant="outline-secondary">Save</Button>
                            </div>



                        </Card.Body>
                    </Card>
                </Col>
                <SuggestedCars
                    cars={mockCars}
                    excludeId={car.id}
                    limit={4}
                />
            </Row>
        </div>
    );
}

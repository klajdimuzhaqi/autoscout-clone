import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function SuggestedCars({ cars = [], excludeId, limit = 4 }) {
    const suggestions = cars
        .filter((c) => c.id !== excludeId)
        .slice(0, limit);

    if (suggestions.length === 0) return null;

    return (
        <div className="mt-5">
            <h4 className="fw-bold mb-3">You may also like</h4>

            <Row className="g-3">
                {suggestions.map((car) => (
                    <Col key={car.id} xs={12} sm={6} lg={3}>
                        <Card
                            as={Link}
                            to={`/offers/${car.id}`}
                            className="h-100 shadow-sm border-0 overflow-hidden"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div style={{ height: 140, overflow: "hidden" }}>
                                <img
                                    src={car.image}
                                    alt={car.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>

                            <Card.Body>
                                <div className="fw-semibold" style={{ lineHeight: 1.2 }}>
                                    {car.title}
                                </div>

                                <div className="text-muted small mt-1">
                                    {car.location}
                                </div>

                                <div className="fw-bold mt-2">
                                    € {Number(car.price).toLocaleString()}
                                </div>

                                <div className="d-flex gap-2 flex-wrap mt-2">
                                    <Badge bg="secondary">{car.year}</Badge>
                                    <Badge bg="secondary">
                                        {Number(car.km).toLocaleString()} km
                                    </Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

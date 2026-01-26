import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function CarResultCard({ car }) {
    return (
        <Card className="shadow-sm border-0 mb-3 overflow-hidden">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={car.image}
                        alt={car.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-8">
                    <Card.Body className="d-flex flex-column h-100">
                        <div className="d-flex justify-content-between align-items-start gap-3">
                            <div>
                                <Card.Title className="mb-1">{car.title}</Card.Title>
                                <div className="text-muted small">{car.location}</div>
                            </div>

                            <div className="text-end">
                                <div className="fs-5 fw-bold">€ {car.price.toLocaleString()}</div>
                                <Badge bg="light" text="dark" className="mt-1">
                                    Used
                                </Badge>
                            </div>
                        </div>

                        <div className="mt-3 d-flex flex-wrap gap-2">
                            <Badge bg="secondary">{car.year}</Badge>
                            <Badge bg="secondary">{car.km.toLocaleString()} km</Badge>
                            <Badge bg="secondary">{car.fuel}</Badge>
                            <Badge bg="secondary">{car.gearbox}</Badge>
                        </div>

                        <div className="mt-auto pt-3 d-flex gap-2">
                            <Button variant="primary">View details</Button>
                            <Button variant="outline-secondary">Save</Button>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
}

import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaStar, FaRegStar } from "react-icons/fa";

import { mockMotorbikes } from "../data/mockMotorbikes.js";
import { isFavorite, toggleFavorite } from "../utils/favorites.js";
import SuggestedMotorbikes from "../Components/motorbikes/SuggestedMotorbikes.jsx";

export default function MotorbikeDetailsPage() {
    const { id } = useParams();

    const bike = useMemo(() => {
        const numId = Number(id);
        return mockMotorbikes.find((b) => b.id === numId);
    }, [id]);

    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (!bike?.id) return;

        const sync = () => setSaved(isFavorite(bike.id));
        sync();

        window.addEventListener("favoritesUpdated", sync);
        return () => window.removeEventListener("favoritesUpdated", sync);
    }, [bike?.id]);

    if (!bike) {
        return (
            <div className="py-4">
                <h3>Motorbike not found</h3>
                <p className="text-muted">This listing does not exist.</p>
                <Button as={Link} to="/motorbikes" variant="primary">
                    Back to motorbikes
                </Button>
            </div>
        );
    }

    return (
        <div className="py-3">
            <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                <div>
                    <h2 className="mb-1">{bike.title}</h2>
                    <div className="text-muted">{bike.location}</div>

                    <div className="mt-2 d-flex gap-2 flex-wrap">
                        <Badge bg="secondary">{bike.year}</Badge>
                        <Badge bg="secondary">{Number(bike.km).toLocaleString()} km</Badge>
                        <Badge bg="secondary">{bike.fuel}</Badge>
                        <Badge bg="secondary">{bike.gearbox}</Badge>
                    </div>
                </div>

                <div className="text-end">
                    <div className="fs-2 fw-bold">€ {Number(bike.price).toLocaleString()}</div>

                    {/* ✅ Save + Back (same as your screenshot layout) */}
                    <div className="mt-2 d-flex gap-2 justify-content-end flex-wrap">
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => {
                                toggleFavorite(bike);
                                setSaved(isFavorite(bike.id));
                            }}
                            aria-label={saved ? "Remove from favourites" : "Add to favourites"}
                            title={saved ? "Saved" : "Save"}
                            className="d-inline-flex align-items-center gap-2"
                        >
                            {saved ? <FaStar /> : <FaRegStar />}
                            {saved ? "Saved" : "Save"}
                        </Button>

                        <Button as={Link} to="/motorbikes" variant="outline-secondary" size="sm">
                            ← Back to motorbikes
                        </Button>
                    </div>
                </div>
            </div>

            <Row className="g-3 mt-2">
                <Col lg={8}>
                    <Card className="shadow-sm border-0 overflow-hidden">
                        {bike.image ? (
                            <img
                                src={bike.image}
                                alt={bike.title}
                                style={{ width: "100%", height: 420, objectFit: "cover" }}
                            />
                        ) : (
                            <div style={{ width: "100%", height: 420, background: "#eee" }} />
                        )}
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="mb-3">Motorbike details</Card.Title>

                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Year</span>
                                    <span className="fw-semibold">{bike.year}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Mileage</span>
                                    <span className="fw-semibold">
                                        {Number(bike.km).toLocaleString()} km
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Fuel</span>
                                    <span className="fw-semibold">{bike.fuel}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Gearbox</span>
                                    <span className="fw-semibold">{bike.gearbox}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span className="text-muted">Location</span>
                                    <span className="fw-semibold">{bike.location}</span>
                                </ListGroup.Item>
                            </ListGroup>

                            <div className="mt-3 d-grid gap-2">
                                <Button variant="primary">Contact seller</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <SuggestedMotorbikes bikes={mockMotorbikes} excludeId={bike.id} limit={3} />
            </Row>
        </div>
    );
}

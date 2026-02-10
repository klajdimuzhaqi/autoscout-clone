import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function CarResultCard({ car }) {
    const offerUrl = `/offers/${car.id}`;

    const [saved, setSaved] = useState(isFavorite(car.id));

    useEffect(() => {
        const sync = () => setSaved(isFavorite(car.id));
        window.addEventListener("favoritesUpdated", sync);
        return () => window.removeEventListener("favoritesUpdated", sync);
    }, [car.id]);

    return (
        <Card className="shadow-sm border-0 mb-3 overflow-hidden">
            <div className="row g-0">
                <div className="col-md-4">
                    <Link to={offerUrl} style={{ display: "block" }}>
                        <img
                            src={car.image}
                            alt={car.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Link>
                </div>

                <div className="col-md-8">
                    <Card.Body className="d-flex flex-column h-100">
                        <div className="d-flex justify-content-between align-items-start gap-3">
                            <div>
                                <Card.Title className="mb-1">
                                    <Link
                                        to={offerUrl}
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        {car.title}
                                    </Link>
                                </Card.Title>
                                <div className="text-muted small">{car.location}</div>
                            </div>

                            <div className="text-end">
                                <div className="fs-5 fw-bold">
                                    € {Number(car.price).toLocaleString()}
                                </div>
                                <Badge bg="light" text="dark" className="mt-1">
                                    Used
                                </Badge>
                            </div>
                        </div>

                        <div className="mt-3 d-flex flex-wrap gap-2">
                            <Badge bg="secondary">{car.year}</Badge>
                            <Badge bg="secondary">{Number(car.km).toLocaleString()} km</Badge>
                            <Badge bg="secondary">{car.fuel}</Badge>
                            <Badge bg="secondary">{car.gearbox}</Badge>
                        </div>

                        <div className="mt-auto pt-3 d-flex gap-2 align-items-center">
                            <Button as={Link} to={offerUrl} variant="primary">
                                View details
                            </Button>

                            <button
                                type="button"
                                className="as-save-btn"
                                onClick={() => toggleFavorite(car)}
                                aria-label={saved ? "Remove from saved" : "Save car"}
                                title={saved ? "Saved" : "Save"}
                            >
                                {saved ? <FaStar color="#f5c518" /> : <FaRegStar />}
                            </button>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
}

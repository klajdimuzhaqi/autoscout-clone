import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";

import { isFavorite, toggleFavorite } from "../../utils/favorites.js";

export default function MotorbikeCard({ bike }) {
    const offerUrl = `/motorbikes/${bike.id}`;
    const [saved, setSaved] = useState(isFavorite(bike.id));

    useEffect(() => {
        const sync = () => setSaved(isFavorite(bike.id));
        window.addEventListener("favoritesUpdated", sync);
        return () => window.removeEventListener("favoritesUpdated", sync);
    }, [bike.id]);

    return (
        <Card className="shadow-sm border-0 h-100 overflow-hidden">
            <div style={{ position: "relative" }}>
                <Link to={offerUrl} style={{ display: "block" }}>
                    {bike.image ? (
                        <Card.Img
                            variant="top"
                            src={bike.image}
                            alt={bike.title}
                            style={{ height: 180, objectFit: "cover" }}
                        />
                    ) : (
                        <div style={{ height: 180, background: "#eee" }} />
                    )}
                </Link>

                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(bike);
                        setSaved(isFavorite(bike.id));
                    }}
                    aria-label={saved ? "Remove from favourites" : "Add to favourites"}
                    title={saved ? "Saved" : "Save"}
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        width: 38,
                        height: 38,
                        borderRadius: 999,
                        border: "1px solid rgba(0,0,0,0.1)",
                        background: "white",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                    }}
                >
                    {saved ? <FaStar color="#f5c518" /> : <FaRegStar />}
                </button>
            </div>

            <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-1" style={{ lineHeight: 1.2 }}>
                    <Link to={offerUrl} style={{ textDecoration: "none", color: "inherit" }}>
                        {bike.title}
                    </Link>
                </Card.Title>

                <div className="text-muted small mb-2">{bike.location}</div>

                <div className="fs-5 fw-bold mb-2">
                    € {Number(bike.price).toLocaleString()}
                </div>

                <div className="d-flex flex-wrap gap-2 mb-3">
                    <Badge bg="secondary">{bike.year}</Badge>
                    <Badge bg="secondary">{Number(bike.km).toLocaleString()} km</Badge>
                    <Badge bg="secondary">{bike.fuel}</Badge>
                    <Badge bg="secondary">{bike.gearbox}</Badge>
                </div>

                <Button as={Link} to={offerUrl} variant="primary" className="mt-auto">
                    View details
                </Button>
            </Card.Body>
        </Card>
    );
}

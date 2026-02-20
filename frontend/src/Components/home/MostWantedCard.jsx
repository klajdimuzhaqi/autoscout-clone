import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

import { isFavorite, toggleFavorite } from "../../utils/favorites.js";

export default function MostWantedCard({ car }) {
    const offerUrl = `/offers/${car.id}`;
    const [saved, setSaved] = useState(isFavorite(car.id));
    

    useEffect(() => {
        const sync = () => setSaved(isFavorite(car.id));
        window.addEventListener("favoritesUpdated", sync);
        return () => window.removeEventListener("favoritesUpdated", sync);
    }, [car.id]);

    return (
        <Card
            as={Link}
            to={offerUrl}
            className="as-card shadow-sm border-0 h-100 overflow-hidden"
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div className="as-card-imgwrap">
                <img className="as-card-img" src={car.image} alt={car.title} />
            </div>

            <Card.Body className="d-flex flex-column">
                <div className="as-card-title">
                    <span className="fw-bold">{car.title.split(" ")[0]}</span>{" "}
                    {car.title.replace(car.title.split(" ")[0], "")}
                </div>

                <div className="as-card-price">€ {car.price.toLocaleString()}</div>

                <div className="as-card-meta">
                    {car.year} | {car.km.toLocaleString()} km | {car.fuel}
                </div>

                <div className="mt-2">
                    <Badge className="as-badge-new">New</Badge>
                </div>

                <div className="mt-auto pt-3 d-flex justify-content-between align-items-end">
                    <div className="as-card-dealer">
                        <div className="text-muted small">Dealer</div>
                        <div className="small">{car.location}</div>
                    </div>

                    <Button
                        variant="outline-secondary"
                        className="as-save-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleFavorite(car);
                            setSaved(isFavorite(car.id));
                        }}
                        aria-label={saved ? "Remove from favourites" : "Add to favourites"}
                        title={saved ? "Saved" : "Save"}
                    >
                        {saved ? <FaStar color="#f5c518" /> : <FaRegStar />}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default function MostWantedCard({ car }) {
    return (
        <Card className="as-card shadow-sm border-0 h-100 overflow-hidden">
           
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

                    <Button variant="outline-secondary" className="as-save-btn">
                        <i className="bi bi-star"></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

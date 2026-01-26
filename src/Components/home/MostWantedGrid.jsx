import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MostWantedCard from "./MostWantedCard.jsx";
import { mockCars } from "../../data/mockCars.js";

export default function MostWantedGrid() {
    return (
        <Row className="g-3">
            {mockCars.map((car) => (
                <Col key={car.id} xs={12} lg={3}>
                    <MostWantedCard car={car} />
                </Col>
            ))}
        </Row>
    );
}


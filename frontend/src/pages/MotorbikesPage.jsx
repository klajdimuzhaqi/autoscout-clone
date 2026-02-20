import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { mockMotorbikes } from "../data/mockMotorbikes.js";
import MotorbikeCard from "../Components/motorbikes/MotorbikeCard.jsx";

export default function MotorbikesPage() {
    return (
        <div className="py-3">
            <div className="mb-3">
                <h1 className="h3 mb-1">Motorbikes</h1>
                <div className="text-muted">
                    {mockMotorbikes.length} listings available
                </div>
            </div>

            <Row className="g-3">
                {mockMotorbikes.map((bike) => (
                    <Col key={bike.id} lg={4} md={6} sm={12}>
                        <MotorbikeCard bike={bike} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

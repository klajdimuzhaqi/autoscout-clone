import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MotorbikeCard from "./MotorbikeCard.jsx";

export default function SuggestedMotorbikes({ bikes, excludeId, limit = 3 }) {
    const list = (bikes || [])
        .filter((b) => b.id !== excludeId)
        .slice(0, limit);

    if (list.length === 0) return null;

    return (
        <div className="mt-4">
            <h3 className="h5 mb-3">Suggested motorbikes</h3>
            <Row className="g-3">
                {list.map((b) => (
                    <Col key={b.id} lg={4} md={6} sm={12}>
                        <MotorbikeCard bike={b} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

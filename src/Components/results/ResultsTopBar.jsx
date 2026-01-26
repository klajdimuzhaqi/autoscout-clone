import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function ResultsTopBar({ total = 0 }) {
    return (
        <Card className="shadow-sm border-0 mb-3">
            <Card.Body className="d-flex align-items-center justify-content-between gap-3">
                <div>
                    <div className="fw-semibold">{total} results</div>
                    <div className="text-muted small">Cars matching your search</div>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <span className="text-muted small">Sort by</span>
                    <Form.Select size="sm" style={{ width: 220 }}>
                        <option>Relevance</option>
                        <option>Price (low to high)</option>
                        <option>Price (high to low)</option>
                        <option>Year (newest)</option>
                        <option>Mileage (lowest)</option>
                    </Form.Select>
                </div>
            </Card.Body>
        </Card>
    );
}

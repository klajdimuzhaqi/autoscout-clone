import Card from 'react-bootstrap/Card';

export default function BodyTypeCard({ item }) {
    return (
        <Card className="h-100 text-center border-0">
            <Card.Body className="py-3">
                <div className="display-6">
                    <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="mt-2 small fw-semibold">{item.label}</div>
            </Card.Body>
        </Card>
    );
}

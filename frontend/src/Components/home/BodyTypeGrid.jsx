import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BodyTypeCard from './BodyTypeCard.jsx';
import { bodyTypes } from '../../data/bodyTypes.js';

export default function BodyTypeGrid() {
    return (
        <Row className="g-3">
            {bodyTypes.map((t) => (
                <Col key={t.key} xs={6} sm={4} md={3} lg={2}>
                    <BodyTypeCard item={t} />
                </Col>
            ))}
        </Row>
    );
}

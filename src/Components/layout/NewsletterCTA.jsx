import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import x7Image from "../../assets/cars/x7.jpg";
import "./newsletter-cta.css";


export default function NewsletterCTA() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState({ type: "", msg: "" });

    const onSubmit = (e) => {
        e.preventDefault();

        const ok = /^\S+@\S+\.\S+$/.test(email);
        if (!ok) {
            setStatus({ type: "danger", msg: "Shkruaj një email të vlefshëm." });
            return;
        }

        setStatus({ type: "success", msg: "U regjistrua me sukses! (demo)" });
        setEmail("");
    };

    return (
        <Container className="my-5">
            <Card className="newsletter-cta border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                    <Row className="align-items-center g-4">
                        <Col md={7}>
                            <h2 className="fw-bold mb-3">
                                The most important car news in your inbox
                            </h2>
                            <p className="text-muted mb-4">
                                Newsletter-i ynë të sjell raporte, artikuj dhe ofertat më të mira
                                për makina të përdorura.
                            </p>

                            <Form onSubmit={onSubmit} className="d-flex gap-2 flex-column flex-sm-row">
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="Email address"
                                />
                                <Button type="submit" className="px-4">
                                    Subscribe to newsletter
                                </Button>
                            </Form>

                            {status.msg ? (
                                <Alert className="mt-3 mb-0" variant={status.type}>
                                    {status.msg}
                                </Alert>
                            ) : null}

                            <small className="text-muted d-block mt-3">
                                By submitting, you agree to receive the newsletter. You can revoke
                                your consent at any time.
                            </small>
                        </Col>

                        <Col md={5} className="position-relative">
                            <div className="newsletter-cta__art">
                                <img
                                    src={x7Image}
                                    alt="BMW X7"
                                    className="newsletter-cta__img"
                                />
                                <div className="newsletter-cta__shape" aria-hidden="true" />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

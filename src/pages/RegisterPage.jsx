import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <Container className="py-5" style={{ maxWidth: 520 }}>
            <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <i className="bi bi-person-plus fs-4" />
                        <h1 className="h4 mb-0">Register</h1>
                    </div>

                    <p className="text-muted mb-4">
                        Create a new account to get started.
                    </p>

                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="registerName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="John Doe"
                                autoComplete="name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerPasswordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button type="submit" variant="success" size="lg">
                                Create Account
                            </Button>
                        </div>

                        <div className="mt-3 text-muted">
                            Already have an account?{" "}
                            <Link to="/login" className="text-decoration-none">
                                Sign in here
                            </Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

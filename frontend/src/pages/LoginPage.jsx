import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <Container className="py-5" style={{ maxWidth: 520 }}>
            <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <i className="bi bi-box-arrow-in-right fs-4" />
                        <h1 className="h4 mb-0">Login</h1>
                    </div>

                    <p className="text-muted mb-4">
                        Sign in using your email and password.
                    </p>

                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="loginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="••••••••"
                                autoComplete="current-password"
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button type="submit" variant="dark" size="lg">
                                Sign In
                            </Button>
                        </div>

                        <div className="mt-3 text-muted">
                            Don’t have an account?{" "}
                            <Link to="/register" className="text-decoration-none">
                                Create one
                            </Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}


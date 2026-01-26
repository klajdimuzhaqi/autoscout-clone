import Container from 'react-bootstrap/Container';

export default function Footer() {
    return (
        <footer className="border-top py-4 mt-5">
            <Container className="text-muted small text-center">
                © {new Date().getFullYear()} Autoscout Clone
            </Container>
        </footer>
    );
}

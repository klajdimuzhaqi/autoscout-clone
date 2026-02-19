import { Outlet } from "react-router-dom";
import TopNav from './TopNav.jsx';
import HeaderBar from './HeaderBar.jsx';
// import NewsletterCTA from "../layout/NewsletterCTA.jsx";
import Footer from './Footer.jsx';
import Container from 'react-bootstrap/Container';

export default function PageContainer() {
    return (
        <>
            <TopNav />
            <HeaderBar />
            <main>
                <Container className="py-4">
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}

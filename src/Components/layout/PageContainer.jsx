import TopNav from './TopNav.jsx';
import HeaderBar from './HeaderBar.jsx';
import NewsletterCTA from "../layout/NewsletterCTA.jsx";
import Footer from './Footer.jsx';
import Container from 'react-bootstrap/Container';


export default function PageContainer({ children }) {
    return (
        <>
            <TopNav />
            <HeaderBar />
            <main>
                <Container className="py-4">{children}</Container>
            </main>
            <NewsletterCTA />
            <Footer />
        </>
    );
}

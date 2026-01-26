import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";
import ResultsFilters from "../components/results/ResultsFilters.jsx";
import ResultsTopBar from "../components/results/ResultsTopBar.jsx";
import ResultsList from "../components/results/ResultsList.jsx";
import { mockCars } from "../data/mockCars.js";

export default function ResultsPage() {
    const [searchParams] = useSearchParams();

    const make = searchParams.get("make") || "";
    const priceUpTo = searchParams.get("priceUpTo") || "";
    const yearFrom = searchParams.get("yearFrom") || "";
    const fuel = searchParams.get("fuel") || "";
    const gearbox = searchParams.get("gearbox") || "";

    const filteredCars = mockCars.filter((car) => {
        if (make && !car.title.toLowerCase().includes(make.toLowerCase())) return false;
        if (fuel && car.fuel !== fuel) return false;
        if (gearbox && car.gearbox !== gearbox) return false;

        if (priceUpTo && car.price > Number(priceUpTo)) return false;
        if (yearFrom && car.year < Number(yearFrom)) return false;

        return true;
    });

    return (
        <Row className="g-3">
            <Col lg={3}>
                <ResultsFilters />
            </Col>

            <Col lg={9}>
                <ResultsTopBar total={filteredCars.length} />
                <ResultsList cars={filteredCars} />
            </Col>
        </Row>
    );
}

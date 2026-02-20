import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";
import ResultsFilters from "../Components/results/ResultsFilters.jsx";
import ResultsTopBar from "../Components/results/ResultsTopBar.jsx";
import ResultsList from "../Components/results/ResultsList.jsx";
import { mockCars } from "../data/mockCars.js";

export default function ResultsPage() {
    const [searchParams] = useSearchParams();

    const make = searchParams.get("make") || "";
    const priceUpTo = searchParams.get("priceUpTo") || "";
    const yearFrom = searchParams.get("yearFrom") || "";
    const fuel = searchParams.get("fuel") || "";
    const gearbox = searchParams.get("gearbox") || "";
    const model = searchParams.get("model") || "";
    const region = searchParams.get("region") || "";
    const cityZip = searchParams.get("cityZip") || "";


    const filteredCars = mockCars.filter((car) => {
        if (make && !car.title.toLowerCase().includes(make.toLowerCase())) return false;
        if (fuel && car.fuel !== fuel) return false;
        if (gearbox && car.gearbox !== gearbox) return false;
        if (model && !car.title.toLowerCase().includes(model.toLowerCase())) return false;
        if (cityZip && !car.location.toLowerCase().includes(cityZip.toLowerCase())) return false;


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

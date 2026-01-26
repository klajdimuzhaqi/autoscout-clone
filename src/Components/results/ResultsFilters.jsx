import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSearchParams } from "react-router-dom";

export default function ResultsFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    const make = searchParams.get("make") || "";
    const priceUpTo = searchParams.get("priceUpTo") || "";
    const yearFrom = searchParams.get("yearFrom") || "";
    const fuel = searchParams.get("fuel") || "";
    const gearbox = searchParams.get("gearbox") || "";

    const updateParam = (key, value) => {
        const next = new URLSearchParams(searchParams);

        if (!value) next.delete(key);
        else next.set(key, value);

        setSearchParams(next);
    };

    const resetFilters = () => {
        setSearchParams({});
    };

    return (
        <Card className="shadow-sm border-0">
            <Card.Body>
                <h5 className="mb-3">Filters</h5>

                <Form className="d-grid gap-3">
                    <Form.Group>
                        <Form.Label>Make</Form.Label>
                        <Form.Select
                            value={make}
                            onChange={(e) => updateParam("make", e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="BMW">BMW</option>
                            <option value="Audi">Audi</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                            <option value="Volkswagen">Volkswagen</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price up to (€)</Form.Label>
                        <Form.Select
                            value={priceUpTo}
                            onChange={(e) => updateParam("priceUpTo", e.target.value)}
                        >
                            <option value="">Any</option>
                            <option value="5000">5,000</option>
                            <option value="10000">10,000</option>
                            <option value="20000">20,000</option>
                            <option value="30000">30,000</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Year from</Form.Label>
                        <Form.Select
                            value={yearFrom}
                            onChange={(e) => updateParam("yearFrom", e.target.value)}
                        >
                            <option value="">Any</option>
                            <option value="2015">2015</option>
                            <option value="2017">2017</option>
                            <option value="2019">2019</option>
                            <option value="2021">2021</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fuel</Form.Label>
                        <Form.Select
                            value={fuel}
                            onChange={(e) => updateParam("fuel", e.target.value)}
                        >
                            <option value="">Any</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Electric">Electric</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Gearbox</Form.Label>
                        <Form.Select
                            value={gearbox}
                            onChange={(e) => updateParam("gearbox", e.target.value)}
                        >
                            <option value="">Any</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="outline-secondary" onClick={resetFilters}>
                        Reset filters
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SearchForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        make: '',
        model: '',
        priceUpTo: '',
        firstRegFrom: '',
        region: 'Europe',
        cityZip: '',
    });

    const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

    const onSubmit = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (form.make) params.set("make", form.make);
        if (form.model) params.set("model", form.model);
        if (form.priceUpTo) params.set("priceUpTo", form.priceUpTo);
        if (form.firstRegFrom) params.set("yearFrom", form.firstRegFrom);
        if (form.region) params.set("region", form.region);
        if (form.cityZip) params.set("cityZip", form.cityZip);

        navigate(`/results?${params.toString()}`);
    };


    return (
        <Form onSubmit={onSubmit}>
            <Row className="g-3 align-items-end">
                <Col md={3}>
                    <Form.Select value={form.make} onChange={onChange('make')}>
                        <option value="">Make</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Mercedes-Benz</option>
                        <option>Volkswagen</option>
                    </Form.Select>
                </Col>

                <Col md={3}>
                    <Form.Select value={form.model} onChange={onChange('model')} disabled={!form.make}>
                        <option value="">Model</option>
                        <option>A3</option>
                        <option>A4</option>
                        <option>Q5</option>
                    </Form.Select>
                </Col>

                <Col md={3}>
                    <Form.Select value={form.priceUpTo} onChange={onChange('priceUpTo')}>
                        <option value="">Price up to (€)</option>
                        <option value="5000">5,000</option>
                        <option value="10000">10,000</option>
                        <option value="20000">20,000</option>
                        <option value="30000">30,000</option>
                    </Form.Select>
                </Col>

                <Col md={3}>
                    <Form.Select value={form.firstRegFrom} onChange={onChange('firstRegFrom')}>
                        <option value="">First registration from</option>
                        <option value="2015">2015</option>
                        <option value="2018">2018</option>
                        <option value="2020">2020</option>
                        <option value="2022">2022</option>
                    </Form.Select>
                </Col>

                <Col md={3}>
                    <Form.Select value={form.region} onChange={onChange('region')}>
                        <option>Europe</option>
                        <option>Germany</option>
                        <option>Italy</option>
                        <option>France</option>
                    </Form.Select>
                </Col>

                <Col md={6}>
                    <Form.Control
                        placeholder="City/ZIP"
                        value={form.cityZip}
                        onChange={onChange('cityZip')}
                    />
                </Col>

                <Col md={3} className="d-grid">
                    <Button type="submit" size="lg">
                        100 results
                    </Button>
                </Col>
            </Row>

            <div className="mt-3 text-center">
                <Button variant="link" className="text-decoration-none">Refine search</Button>
            </div>
        </Form>
    );
}

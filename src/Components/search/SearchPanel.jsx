import Card from 'react-bootstrap/Card';
import VehicleTabs from './VehicleTabs.jsx';
import SearchForm from './SearchForm.jsx';

export default function SearchPanel() {
    return (
        <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
                <VehicleTabs />
                <div className="mt-3">
                    <h5 className="mb-3">Find used vehicles and new vehicles</h5>
                    <SearchForm />
                </div>
            </Card.Body>
        </Card>
    );
}

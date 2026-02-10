import SearchPanel from '../Components/search/SearchPanel.jsx';
import BodyTypeGrid from '../Components/home/BodyTypeGrid.jsx';
import MostWantedGrid from "../Components/home/MostWantedGrid.jsx";


export default function HomePage() {
    return (
        <>
            <SearchPanel />
            <div className="mt-4">
                <h4 className="mb-3">Search by body type</h4>
                <BodyTypeGrid />
            </div>

            <div className="mt-5">
                <h4 className="mb-3">Most wanted</h4>
                <MostWantedGrid />
            </div>
        </>
    );
}

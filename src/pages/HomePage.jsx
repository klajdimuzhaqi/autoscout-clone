import SearchPanel from '../Components/search/SearchPanel.jsx';
import BodyTypeGrid from '../Components/home/BodyTypeGrid.jsx';
import MostWantedGrid from "../Components/home/MostWantedGrid.jsx";
import Marquee from "../Components/home/Marquee.jsx";
import WhyChooseUs from "../Components/home/WhyChooseUs.jsx"

export default function HomePage() {
    const brands = [
        "BMW", "Audi", "Mercedes-Benz", "Volkswagen", "Porsche",
        "Toyota", "Ford", "Tesla", "Honda", "Hyundai"
    ];

    const models = [
        "BMW X5", "Audi A6", "Mercedes C-Class", "VW Golf",
        "Porsche 911", "Toyota Corolla", "Ford Focus", "Tesla Model 3"
    ];

    return (
        <>
            <SearchPanel />

            <div className="mt-4">
                <Marquee items={brands} direction="right" speed={18} />
            </div>

            <div className="mt-3">
                <Marquee items={models} direction="left" speed={22} />
            </div>

            <div className="mt-4">
                <h4 className="mb-3">Search by body type</h4>
                <BodyTypeGrid />
            </div>

            <div className="mt-5">
                <h4 className="mb-3">Most wanted</h4>
                <MostWantedGrid />
            </div>
            <WhyChooseUs />
        </>
    );
}

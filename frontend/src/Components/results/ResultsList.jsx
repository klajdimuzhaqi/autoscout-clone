import CarResultCard from "./CarResultCard.jsx";

export default function ResultsList({ cars = [] }) {
    return (
        <div>
            {cars.map((car) => (
                <CarResultCard key={car.id} car={car} />
            ))}
        </div>
    );
}

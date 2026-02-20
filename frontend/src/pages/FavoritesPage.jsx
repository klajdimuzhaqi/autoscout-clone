import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import CarResultCard from "../Components/results/CarResultCard.jsx";
import { clearFavorites, getFavorites } from "../utils/favorites.js";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState(() => getFavorites());

    useEffect(() => {
        const sync = () => setFavorites(getFavorites());
        window.addEventListener("favoritesUpdated", sync);
        return () => window.removeEventListener("favoritesUpdated", sync);
    }, []);

    return (
        <div>
            <Stack
                direction="horizontal"
                className="justify-content-between align-items-center mb-3"
                gap={3}
            >
                <div>
                    <h1 className="h3 mb-1">Your favourites</h1>
                    <div className="text-muted">
                        {favorites.length} saved {favorites.length === 1 ? "car" : "cars"}
                    </div>
                </div>

                <Button
                    variant="outline-danger"
                    onClick={() => {
                        clearFavorites();
                        setFavorites([]);
                    }}
                    disabled={favorites.length === 0}
                >
                    Clear all
                </Button>
            </Stack>

            {favorites.length === 0 ? (
                <Alert variant="info">
                    You don’t have any saved cars yet. Go to{" "}
                    <Alert.Link as={Link} to="/results">
                        Results
                    </Alert.Link>{" "}
                    and click the ⭐ to save cars.
                </Alert>
            ) : (
                favorites.map((car) => <CarResultCard key={car.id} car={car} />)
            )}
        </div>
    );
}

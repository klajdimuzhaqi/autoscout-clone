import HomePage from "../pages/HomePage.jsx";
import ResultsPage from "../pages/ResultsPage.jsx";
import CarDetailsPage from "../pages/CarDetailsPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/results", element: <ResultsPage /> },
    { path: "/favorites", element: <FavoritesPage /> },
    { path: "/offers/:id", element: <CarDetailsPage /> },
    { path: "*", element: <NotFoundPage /> },
];


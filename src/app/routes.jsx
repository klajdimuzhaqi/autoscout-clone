import HomePage from "../pages/HomePage.jsx";
import ResultsPage from "../pages/ResultsPage.jsx";
import CarDetailsPage from "../pages/CarDetailsPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";
import MotorbikesPage from "../pages/MotorbikesPage.jsx";
import MotorbikeDetailsPage from "../pages/MotorbikeDetailsPage.jsx";



export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/results", element: <ResultsPage /> },
    { path: "/favorites", element: <FavoritesPage /> },
    { path: "/offers/:id", element: <CarDetailsPage /> },
    { path: "*", element: <NotFoundPage /> },
    { path: "/motorbikes", element: <MotorbikesPage /> },
    { path: "/motorbikes", element: <MotorbikesPage /> },
    { path: "/motorbikes/:id", element: <MotorbikeDetailsPage /> },
];


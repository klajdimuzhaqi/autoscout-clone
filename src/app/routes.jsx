import HomePage from "../pages/HomePage.jsx";
import ResultsPage from "../pages/ResultsPage.jsx";
import CarDetailsPage from "../pages/CarDetailsPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";
import MotorbikesPage from "../pages/MotorbikesPage.jsx";
import MotorbikeDetailsPage from "../pages/MotorbikeDetailsPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import OffcanvasExample from "../pages/ControlPanel.jsx";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/results", element: <ResultsPage /> },
    { path: "/favorites", element: <FavoritesPage /> },
    { path: "/offers/:id", element: <CarDetailsPage /> },
    { path: "/motorbikes", element: <MotorbikesPage /> },
    { path: "/motorbikes/:id", element: <MotorbikeDetailsPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/controlpanel", element: <OffcanvasExample /> },
    { path: "*", element: <NotFoundPage /> },

];

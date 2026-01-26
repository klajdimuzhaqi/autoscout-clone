import HomePage from '../pages/HomePage.jsx';
import ResultsPage from '../pages/ResultsPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

export const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/results', element: <ResultsPage /> },
    { path: '*', element: <NotFoundPage /> },
];

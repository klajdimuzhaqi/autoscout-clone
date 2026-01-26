import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './app/routes.jsx';
import PageContainer from './components/layout/PageContainer.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

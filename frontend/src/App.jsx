import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./app/routes.jsx";
import PageContainer from "./Components/layout/PageContainer.jsx";
import HomeAdmin from "./pages/Admin/Home.jsx"

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/admin" element={<HomeAdmin />} />
        <Route element={<PageContainer />}>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

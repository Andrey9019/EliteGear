import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;

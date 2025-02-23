// 📂 src/router.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;

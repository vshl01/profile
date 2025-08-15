import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
// import AboutPreview from "../components/section/About";
// import ProjectsPreview from "../components/section/Project";

const AppRoutes = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutPreview />} /> */}
        {/* <Route path="/projects" element={<ProjectsPreview />} /> */}
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRoutes;

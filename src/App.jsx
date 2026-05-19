import { HashRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResearchPage from "./pages/ResearchPage";
import ResumeRequestPage from "./pages/ResumeRequestPage";
import SectionPage from "./pages/SectionPage";
import TeachingPage from "./pages/TeachingPage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume-request" element={<ResumeRequestPage />} />
          <Route path="/:slug" element={<SectionPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

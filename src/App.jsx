import { HashRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import ResumeRequestPage from "./pages/ResumeRequestPage";
import SectionPage from "./pages/SectionPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume-request" element={<ResumeRequestPage />} />
          <Route path="/:slug" element={<SectionPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

import { HashRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import SectionPage from "./pages/SectionPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<SectionPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

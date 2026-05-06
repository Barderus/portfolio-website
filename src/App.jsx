import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import SectionPage from "./pages/SectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<SectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

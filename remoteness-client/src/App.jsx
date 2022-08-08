import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import LandscapePage from "./pages/LandscapePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* <Route path="/landscape" element= {<LandscapePage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

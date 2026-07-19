import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import DestinationsPage from "./pages/DestinationsPage";
import PackagesPage from "./pages/PackagesPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/destinations"
          element={<DestinationsPage />}
        />

        <Route
          path="/packages"
          element={<PackagesPage />}
        />

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
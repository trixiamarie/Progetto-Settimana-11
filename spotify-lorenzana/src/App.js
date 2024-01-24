import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyHomepage from "./pages/MyHomepage";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalSidebar from "./components/VeticalSidebar";
import PlayerControls from "./components/PlayerControlers";
import LikedSongs from "./components/LikedSongs";


function App() {
  return (
    <Router>
    <VerticalSidebar/>
      <Routes>
        <Route path="/" element={<MyHomepage />} />
        <Route path="/search/:query" element={<MyHomepage />} />
        <Route path="/albumpage/:id" element={<AlbumPage />} />
        <Route path="/artistpage/:id" element={<ArtistPage />} />
        <Route path="/library" element={<LikedSongs />} />
      </Routes>
      <PlayerControls/>
    </Router>
  );
}

export default App;

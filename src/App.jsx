import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe Routes
import './App.css';
import PopularMovies from './components/PopularMovies';
import FeaturedMovies from './components/FeaturedMovies';
import NewReleases from './components/NewReleases';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app-container"> 
    <Router>  
      <NavBar />
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/featured" element={<FeaturedMovies />} />
        <Route path="/new-releases" element={<NewReleases />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;

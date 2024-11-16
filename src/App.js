import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import CakeCategories from './pages/CakeCategories';
import CakeDetails from './pages/CakeDetails';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CakeCategories />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
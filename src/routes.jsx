import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About } from './modules/website/pages';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
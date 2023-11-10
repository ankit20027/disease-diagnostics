import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ConfirmationPage from './ConfirmationPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/confirmation/:formData" element={<ConfirmationPage />} />
    </Routes>
  </Router>
);

export default App;

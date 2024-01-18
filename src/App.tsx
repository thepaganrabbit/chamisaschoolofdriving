import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Classes from './pages/Classes/classes';
import TopNav from './components/TopNav/TopNav';
import Pricing from './pages/Pricing/Pricing';
import Documentation from './pages/Documentation/Documentation';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/documentation" element={<Documentation />} />

      </Routes>
    </div>
  );
}

export default App;

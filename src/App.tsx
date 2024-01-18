import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Classes from './pages/Classes/classes';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </div>
  );
}

export default App;

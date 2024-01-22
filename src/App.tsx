import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Classes from './pages/Classes/classes';
import TopNav from './components/TopNav/TopNav';
import Pricing from './pages/Pricing/Pricing';
import Documentation from './pages/Documentation/Documentation';
import Schedule from './pages/Schedule/Schedule';
import EmployeeHome from './pages/Employee/EmployeeHome/EmployeeHome';
import LoginPage from './pages/Employee/LoginPage/LoginPage';
import AdminHome from './pages/Admin/AdminHome/AdminHome';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/admin">
          <Route index element={<AdminHome />} />
        </Route>
        <Route path="/employee">
          <Route index element={<LoginPage />} />
          <Route path="/employeehome" element={<EmployeeHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

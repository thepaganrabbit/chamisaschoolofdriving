import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHome from './AdminHome/AdminHome';

const AdminRoot = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
    </Routes>
  );
};

export default AdminRoot;

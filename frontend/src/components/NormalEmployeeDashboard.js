import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import RequestAsset from './RequestAsset';
import UserRequests from './UserRequests';

function NormalEmployeeDashboard() {
  return (
    <div>
      <h1>Normal Employee Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/request-asset">Request Asset</Link>
          </li>
         
          <li>
            <Link to="/user-requests">User Requests</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/request-asset" element={<RequestAsset />} />
        <Route path="/user-requests" element={<UserRequests />} />
      </Routes>
    </div>
  );
}

export default NormalEmployeeDashboard;

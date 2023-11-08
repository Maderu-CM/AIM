import React, { useState, useEffect } from 'react';


const UserRequests = () => {
  const [activeRequests, setActiveRequests] = useState([]);
  const [completedRequests, setCompletedRequests] = useState([]);

  useEffect(() => {
    const jwtToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTQwMzA0MywianRpIjoiZTk4MWYzMmMtYjUyZi00ZDg4LThmMzktNjFjN2Y5ZTNmODgyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoyNSwicm9sZSI6Im5vcm1hbCBlbXBsb3llZSJ9LCJuYmYiOjE2OTk0MDMwNDMsImV4cCI6MTY5OTQ4OTQ0M30.IdmN2Bh5CDjB0JzvbVW8xVnuiUA1OrfsM_PreZyvBCE';
  
    fetch('/user_requests', {
      method: 'GET',
      headers: {
        'Authorization': jwtToken,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then((data) => {
        setActiveRequests(data.active_requests);
        setCompletedRequests(data.completed_requests);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Active Requests</h2>
      <ul>
        {activeRequests.map((request) => (
          <li key={request.id}>
            <strong>ID:</strong> {request.id}<br />
            <strong>Reason:</strong> {request.reason}<br />
            <strong>Quantity:</strong> {request.quantity}<br />
            <strong>Urgency:</strong> {request.urgency}<br />
          </li>
        ))}
      </ul>

      <h2>Completed Requests</h2>
      <ul>
        {completedRequests.map((request) => (
          <li key={request.id}>
            <strong>ID:</strong> {request.id}<br />
            <strong>Reason:</strong> {request.reason}<br />
            <strong>Quantity:</strong> {request.quantity}<br />
            <strong>Urgency:</strong> {request.urgency}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRequests;

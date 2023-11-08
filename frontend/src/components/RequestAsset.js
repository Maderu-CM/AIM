import React, { useState } from 'react';

function RequestAsset() {
  const [formData, setFormData] = useState({
    asset_id: '', 
    reason: '',
    quantity: '',
    urgency: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitRequest = () => {
    
    const token = localStorage.getItem("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTM1MTU3OCwianRpIjoiNzMyMjM2NzktM2M3Yi00NWQyLWEyM2QtMTM1OWNmZGViZjg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoyMiwicm9sZSI6Im5vcm1hbGVtcGxveWVlIn0sIm5iZiI6MTY5OTM1MTU3OCwiZXhwIjoxNjk5NDM3OTc4fQ.nr44u1WHtAcJyZ8EcoBJP_ZnRdvjnbyK3Ck0m4YHYo8");

    fetch('http://127.0.0.1:5000/request_asset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData), 
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Request submitted successfully');
          setFormData({
            asset_id: '', 
            reason: '',
            quantity: '',
            urgency: '',
          });
        } else {
          console.error('Request submission failed');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
  };

  return (
    <div>
      <h1>Request Asset</h1>
      <form>
        <input
          type="integer"
          name="asset_id"
          placeholder="Asset ID"
          value={formData.asset_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="urgency"
          placeholder="Urgency"
          value={formData.urgency}
          onChange={handleInputChange}
        />
        <button type="button" onClick={submitRequest}>Submit Request</button>
      </form>
    </div>
  );
}

export default RequestAsset;

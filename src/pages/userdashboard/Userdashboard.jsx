import React from 'react';
import './user.scss';

const Userdashboard= () => {
  return (
    <div className="user-dashboard-container">
      <h2>Welcome to Your Dashboard!</h2>
      <div className="user-info">
        <div className="user-info-item">
          <label>Username:</label>
          <p>john_doe123</p>
        </div>
        <div className="user-info-item">
          <label>Email:</label>
          <p>john_doe123@example.com</p>
        </div>
        <div className="user-info-item">
          <label>Membership Level:</label>
          <p>Gold</p>
        </div>
      </div>
      <div className="user-actions">
        <button>View Orders</button>
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
};

export default Userdashboard;

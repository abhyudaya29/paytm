import React, { useEffect } from 'react';
import AppBar from '../components/AppBar';
import Users from '../components/Users';

const Dashboard = () => {
  
  return (
    <div>
      {/* App Bar */}
      <AppBar/>
      <Users/>
    </div>
  );
}

export default Dashboard;

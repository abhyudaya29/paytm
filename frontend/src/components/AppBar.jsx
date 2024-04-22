import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AppBar = () => {
  const navigate=useNavigate()
  const handleLogut=()=>{
    // localStorage.removeItem("token");
    navigate('/signin')
    toast.success("userLooged Out Successfully")
  }
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left side */}
        <div className="flex-shrink-0">
          <h1 className="text-white text-lg font-semibold">Paytm</h1>
        </div>
        
        {/* Right side */}
        <div className="flex items-center">
          <h2 className="text-white mr-4">Hello</h2>
          <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-900">
            User
          </div>
          <Button onClick={handleLogut} label={"LogOut"}></Button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;

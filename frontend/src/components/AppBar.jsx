import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useSearchParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const AppBar = () => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("username") || ""; // Provide default value

  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate('/signin');
    toast.success("User Logged Out Successfully");
  };

  const fetchBalance = async () => {
    try {
      const response = await axios.get(BASE_URL + "/account", {
        params: { id: id },
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      });
      console.log(response, ">>response for balance get");
      setCurrentBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [currentBalance]); // Empty dependency array to run once on mount

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
            {name && name.length > 0 ? name[0].toUpperCase() : ""}
          </div>
          <Button onClick={handleLogout} label={"LogOut"} />
        </div>
      </div>
      <p className='text-white'>Current Balance RS: {currentBalance}</p>
    </div>
  );
};

export default AppBar;

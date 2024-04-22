import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Placeholder1 from '../components/Placeholder1';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
const BASE_URL=import.meta.env.VITE_APP_BASE_URL
const SignIn = () => {
  const[loader,setLoader]=useState(false)
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  
  const navigate=useNavigate();
  const handleSignin = async () => {
    setLoader(true);
    try {
      const response = await axios.post(BASE_URL + "/signin", {
        username,
        password
      });
      console.log(response,">>response fater auth")
      if (response && response.data.data) {
        const userId = response.data.data.userId;
        const name=response.data.data.username
        console.log(userId, ">>user id after signin");
        navigate('/dashboard?id=' + userId+"&username="+name);
        toast.success("Sign in successful");
      } else {
        toast.error("Sign in failed");
      }
    } catch (error) {
      console.log(error, ">>error in signin");
      toast.error("Error while signing in");
    }
    setLoader(false);
  };


  return (
    <>
    <div className='bg-slate-500 h-screen flex  justify-center ' >
        <div className='flex flex-col items-center justify-center border-solid border-black rounded-md  mt-7 mb-7 bg-white'>
        <Heading label={"SignIn"}/>
        <SubHeading label={" Enter your credentials to access your account"}/>
        <Placeholder1 onChange={(e)=>(setUsername(e.target.value))} label={"userName"} placeholder={"Dev"} type={"text"}/>
        <Placeholder1 onChange={(e)=>setPassword(e.target.value)} label={"Password"} placeholder={"***"} type={"password"}/>
        <Button onClick={handleSignin} label={"SignIn"}/>
        <p>Visited first time? <span className='text-black font-bold'><Link to={"/signup"}>signUp</Link></span></p>
        {loader&& <Loader/>}
        </div>
    </div>
    </>
  );
}

export default SignIn;

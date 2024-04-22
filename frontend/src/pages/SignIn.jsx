import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Placeholder1 from '../components/Placeholder1';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignIn = () => {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate();
  const handleClink=async()=>{
    const response=await axios.post("http://localhost:4000/api/v1/signin",{
      username,
      password
    });
    
    navigate('/dashboard');
    toast.success("SignIn successfully")
    console.log(response,">>>response from signin data for response")
  }


  return (
    <>
    <div className='bg-slate-500 h-screen flex  justify-center ' >
        <div className='flex flex-col items-center justify-center border-solid border-black rounded-md  mt-7 mb-7 bg-white'>
        <Heading label={"SignIn"}/>
        <SubHeading label={" Enter your credentials to access your account"}/>
        <Placeholder1 onChange={(e)=>(setUsername(e.target.value))} label={"userName"} placeholder={"Dev"} type={"text"}/>
        <Placeholder1 onChange={(e)=>setPassword(e.target.value)} label={"Password"} placeholder={"***"} type={"password"}/>
        <Button onClick={handleClink} label={"SignIn"}/>
        <p>Visited first time? <span className='text-black font-bold'><Link to={"/signup"}>signUp</Link></span></p>
        </div>
    </div>
    </>
  );
}

export default SignIn;

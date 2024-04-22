
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Placeholder1 from '../components/Placeholder1'
import Button from '../components/Button'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import Loader from '../components/Loader'
const BASE_URL=import.meta.env.VITE_APP_BASE_URL
const SignUp = () => {
  const[loader,setLoader]=useState(false);
  const[firstName,setfirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")
  const[username,setUserName]=useState("")
  console.log(firstName,lastName,password,username,">>data form")
  const navigate=useNavigate();
  const handleSignup=async()=>{
    try {
      setLoader(true)
      const response= await axios.post(BASE_URL+"/signUp",{
        username, 
        password, 
        firstName, 
        lastName
      })
      if(response){
        toast.success("Signed Up successfully")
      localStorage.setItem("token",response.data.token);
      navigate('/signin')
      }
      
    } catch (error) {
      console.log(error,">>error in signup")
      toast.dismiss("Issue In Signup");
      throw new Error(error)
      
      
    }
    setLoader(false)

    }

  return (
    <>
    <div className='bg-slate-500 h-screen flex  justify-center ' >
        <div className='flex flex-col items-center justify-center border-solid border-black rounded-md  mt-7 mb-7 bg-white'>
        <Heading label={"SignUp"}/>
        <SubHeading label={"Enyet Your credentials to access Paytm"}/>
        <Placeholder1 onChange={(e)=>(setfirstName(e.target.value))} label={"firstName"} placeholder={"Dev"} type={"text"}/>
        <Placeholder1 onChange={(e)=>(setLastName(e.target.value))} label={"Last Name"} placeholder={"Dubey"} type={"text"}/>
        <Placeholder1 onChange={(e)=>(setUserName(e.target.value))} label={"UserName"} placeholder={"abc@123"} type={"text"}/>
        <Placeholder1 onChange={(e)=>(setPassword(e.target.value))}label={"Password"} placeholder={"***"} type={"password"}/>
        <Button label={"SignUp"} onClick={handleSignup}/>
        <p>Already Have an account? <span className='text-black font-bold'><Link to={"/signin"}>Login</Link></span></p>
        {loader && <Loader />}
        </div>
    </div>
    </>
  )
}

export default SignUp
import { useEffect, useState } from "react"
import axios from "axios"
import Data from "./Data";

const Users = () => {
    const[users,setUsers]=useState([]);
    const [filter,setFilter]=useState('')
    console.log(filter,">>filter")
    const fetchData=async()=>{
       const response=await axios.get(`http://localhost:4000/api/v1/user/bulk?filter=${filter}`);
       setUsers(response.data.user);
       console.log(response.data.user,">>>fetched users")
    }
    // Todo debouncing
    useEffect(()=>{
        fetchData()
        

    },[filter])
  return (
    <>
    <div className="font-bold mt-6 text-lg">
         users
    </div>
    <div className="mt-2">
        <input onChange={(e)=>(setFilter(e.target.value))} type="text" placeholder="search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
    </div>
    <div>
        {users?.map((user,index)=>{
            return (
                <>
                <div key={index}>
                    <Data user={user} />
                </div>
                </>
            )
        })}


    </div>
    </>
  )
}

export default Users
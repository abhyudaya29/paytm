import { useEffect, useState } from "react"
import axios from "axios"
import Data from "./Data";
const BASE_URL=import.meta.env.VITE_APP_BASE_URL
const Users = () => {
        const[users,setUsers]=useState([]);
        const [filter,setFilter]=useState('')
        console.log(filter,">>filter")
        const fetchData=async()=>{
        const response=await axios.get(BASE_URL+`/user/bulk?filter=${filter}`);
        setUsers(response.data.user);
        console.log(response.data.user,">>>fetched users")
        }
        // Todo debouncing
        useEffect(()=>{
            const timer=setTimeout(()=>{
                fetchData();

            },500)
            return ()=>clearTimeout(timer);

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
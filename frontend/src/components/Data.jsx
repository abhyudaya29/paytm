/* eslint-disable react/prop-types */
import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Data = ({user}) => {
  return (
    <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Link to={"/send?id="+user._id +"&name="+user.firstName}>
            <Button label={"Send Money"} />
            </Link>
        </div>
    </div>
  )
}

export default Data
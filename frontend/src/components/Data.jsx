/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Data = ({ user }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-gray-200 flex justify-center items-center mr-2">
          <div className="text-xl font-bold">{user.firstName[0]}</div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">
            {user.firstName} {user.lastName}
          </div>
          <div className="text-gray-600">Username: {user.username}</div>
        </div>
      </div>
      <div>
        <Link to={`/send?id=${user._id}&name=${user.firstName}`} className="inline-block">
          <Button label="Send Money" />
        </Link>
      </div>
    </div>
  );
};

export default Data;

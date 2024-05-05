"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const Page = () => {
  const userData = useSelector((data) => data.userdata.users);
  const dispatch = useDispatch()

  return (
    <div className=' justify-between items-center text-center' >
      <h1 className='text-2xl font-bold mt-2'>Remove User Page</h1>
      <div className=''>

        {
          userData.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className='bg-sky-300 w-[490px] p-1 mt-5 flex justify-between items-center text-center ml-96'>
              <span>{item.name} </span>
              <button onClick={() => dispatch(removeUser(item.id))} className='bg-zinc-700 text-white font-bold w-20 rounded-sm'>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page;

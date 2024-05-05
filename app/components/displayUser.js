"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

const DisplayUser = () => {
  const userData = useSelector((data) => data.userdata.users)
  console.log(userData)
  const dispatch = useDispatch()

  return (

    <div className="items-center justify-center mt-3 ml-96 ">
      <h1 className='text-lg font-bold'>Users List</h1>
      <br />
      {
        userData.map((item) => (
          // eslint-disable-next-line react/jsx-key

          // eslint-disable-next-line react/jsx-key, react/jsx-no-comment-textnodes
          <>


            <div className='bg-sky-300 w-[490px] p-1 mt-3 ml-3 flex justify-between '>
              <span>{item.name}</span>
              <button onClick={() => dispatch(removeUser(item.id))} className='bg-zinc-700 text-white font-bold w-20 rounded-sm'>Remove</button>
            </div>

          </>

        ))
      }
    </div>

  )
}

export default DisplayUser

"use client"
import React, { useState } from 'react'
import { addUsers } from '../redux/slice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

const AddUser = () => {
    const [user, setUser] = useState("")

    const dispatch = useDispatch()
    const userDispatch = () => {
        // console.log(name)
        dispatch(addUsers(user))
    }

    return (
        <>
            <div className="add-user border-double justify-center items-center text-center mt-2 mb-5 flex p-10 ">

                <div className='border-50 h-36 w-[500px] box-border shadow-lg p-14'>

                    <input className="h-11 w-50 p-3 border-2 border-solid border-gray-500 gap-20"
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        placeholder="Add New User" />


                    <button onClick={userDispatch} className="bg-green-500 text-white font-bold p-3 ml-5 rounded-md">Add User</button>
                    
                <Link href="/userData" className="bg-green-400 text-black font-bold"> User data Page</Link>
                </div>
            </div>
            <hr />

        </>
    )
}

export default AddUser


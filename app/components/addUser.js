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
            <div className="add-user border-double justify-center items-center text-center mb-2 flex p-10 ">

                <div className='border-50 h-36 w-[500px] box-border shadow-lg p-14'>

                    <input className="h-11 w-50 p-3 border-2 border-solid border-gray-500 gap-20"
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        placeholder="Add New User" />


                    <button onClick={userDispatch} className="bg-green-500 text-white font-bold p-3 ml-5 rounded-md">Add User</button>
                    
                    
                </div>
            </div>
                    <Link href="/userData" className="bg-green-400 ml-2 text-black font-bold rounded-sm p-2"> User data Page</Link>
            <Link className='bg-green-400 ml-4 font-bold rounded-sm p-2' href="/todolist">Todo page</Link>
            <br />
            <br />
            <hr />

        </>
    )
}

export default AddUser


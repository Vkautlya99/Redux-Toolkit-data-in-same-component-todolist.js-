"use client"
import React, { useState } from 'react'
import { addTodos } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const todoData = useSelector((data) => data.todoData.todos)
    // console.log(todoData)
    return (
        <div className='text-center mt-1 p-2'>
            <h3 className='mt-4 font-bold text-2xl'>Add Todo</h3>
            <input
                className='bg-slate-200 mt-3 gap-5 p-1'
                onChange={(e) => setTodo(e.target.value)}
                type="text" />
            <button className='bg-green-600 text-white rounded-sm p-1 ml-5 mb-10'
                onClick={() => dispatch(addTodos(todo))}
                type='submit'>Add Todo
            </button>
            
            <br />
            <hr />
            <h5 className='mt-10 font-bold text-2xl mb-3'>Todo Data</h5>
            <hr />

            {
                todoData.length && todoData.map((item) => {
                    // eslint-disable-next-line react/jsx-key
                    return <h6>{item.name}</h6>
                })
            }
            
        </div>

    )
}

export default TodoList

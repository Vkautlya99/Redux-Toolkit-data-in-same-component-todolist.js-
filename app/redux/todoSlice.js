import { createSlice, nanoid } from "@reduxjs/toolkit"
import slice from "./slice"


const initialState = {
   todos : []
}

const Slices = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state , action) => {
            const data = {
                id: nanoid(),
                name: action.payload

            }
            state.todos.push(data)
        }
    }
})

export const { addTodos } = Slices.actions;
export default slice.reducers;





import { createSlice, nanoid } from "@reduxjs/toolkit"
import Slice from "./slice"


const initialState = {
   todos : []
}

const Slices = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            console.log(action);
            const data = {
                id: nanoid(),
                name: action.payload

            }
            state.todos.push(data)
        }
    }
})

export const { addTodos } = Slices.actions;
export default Slices.reducer;





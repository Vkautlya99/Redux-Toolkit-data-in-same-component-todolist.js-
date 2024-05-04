const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const Slice = createSlice({
    name : "Vikram kautlya",
    initialState, 
    reducers: {
        addUsers: (state, action) => {
            // console.log(action)
            const data = {
                id: nanoid(),
                name: action.payload 
            }
            state.users.push(data);
        },

        removeUser: (state, action) => {
            console.log(action);
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data
        }
    }
})

export const { addUsers , removeUser} = Slice.actions;
export default Slice.reducer;


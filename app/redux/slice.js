const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    // users: JSON.parse(localStorage.getItem("users"))
    users  : []
}

const Slice = createSlice({
    name : "Vikram kautlya",
    initialState, 
    reducers: {
        addUsers: (state, action) => {
            console.log(action)
            const data = {
                id: nanoid(),
                name: action.payload 
            }
            state.users.push(data);
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData);
            
        },

        removeUser: (state, action) => {
        
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data
            
        }
    }
})

export const { addUsers , removeUser} = Slice.actions;
export default Slice.reducer;


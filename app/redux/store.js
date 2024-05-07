const { configureStore } = require("@reduxjs/toolkit");
import userReducers from "./slice"
import todoReducers from "./todoSlice"
export const Store = configureStore({
    reducer: {
        userData: userReducers,
        todoData : todoReducers
    }
    
})






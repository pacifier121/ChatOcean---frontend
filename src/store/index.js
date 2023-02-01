import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import chatReducer from "./chat";
import profileReducer from "./profile";

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        chat: chatReducer,
    }
})

export default store;
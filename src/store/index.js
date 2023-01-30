import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import chatReducer from "./chat";
import uiReducer from "./ui";

const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        chat: chatReducer,
    }
})

export default store;
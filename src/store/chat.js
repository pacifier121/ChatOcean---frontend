import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    chatsVisible: true,
    onlineFriends: null,
    offlineFriends: null
}

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialState,
    reducers: {
        toggleChatsVisible: (state) => {
            state.chatsVisible = !state.chatsVisible;            
        }
    }
})

export const chatActions = chatSlice.actions;

export default chatSlice.reducer;


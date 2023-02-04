import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { io } from "socket.io-client";

const initialState = {
    chatsVisible: true,
    socket: null,
    onlineFriends: null,
    offlineFriends: null,
    activeChat: null,
}

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialState,
    reducers: {
        toggleChatsVisible: (state) => {
            state.chatsVisible = !state.chatsVisible;            
        },
        setSocket: (state, action) => {
            state.socket = action.payload;
            state.activeChat = null;
        },
        setActiveChat: (state, action) => {
            state.activeChat = action.payload;
        },
        addOnline: (state, action) => {
            if (!state.onlineFriends) {
                state.onlineFriends = [action.payload];
            } else if (!state.onlineFriends?.find(f => f._id === action.payload._id)){
                state.onlineFriends.push(action.payload);
            }
        }, 
        removeOnline: (state, action) => {
            state.onlineFriends = state.onlineFriends?.filter(f => f._id !== action.payload)
            if (state.activeChat?._id === action.payload) state.activeChat = null;
        },
        setOnlineFriends: (state, action) => {
            state.onlineFriends = action.payload;
        }
    }
}) 

export const connectSocket = (user) => {
    return async(dispatch) => {
       try {
            const socket = io('ws://192.168.1.6:8000');
            socket.emit('addUser', user._id);

            dispatch(chatSlice.actions.setSocket(socket));
            dispatch(chatSlice.actions.setActiveChat(null));
       } catch (err) {
            console.log(err);
       } 
    }
}

export const disconnectSocket = (socket) => {
    return async(dispatch) => {
        try {
            socket.emit('logout');
            
            dispatch(chatSlice.actions.setSocket(null));
        } catch (err) {
            console.log(err); 
        } 
    }
}

export const fetchChat = (userId, chatName) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`/chat/chat/${userId}/${chatName}`);
            dispatch(chatSlice.actions.setActiveChat(data));
        } catch (err) {
            console.log(err); 
        }
    }
}

export const setOnlineFriends = (friends) => {
    return async(dispatch) => {
        try {
            dispatch(chatSlice.actions.setOnlineFriends(friends)); 
        } catch (err) {
            console.log(err); 
        }
    }
}

export const addOnlineFriend = (friendId) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`/user/user?userId=${friendId}`);
            dispatch(chatSlice.actions.addOnline(data));
        } catch (err) {
           console.log(err); 
        }
    }
}

export const removeOnlineFriend = (userId) => {
    return async(dispatch) => {
        try {
            dispatch(chatSlice.actions.removeOnline(userId));
        } catch (err) {
           console.log(err); 
        }
    }    
}

export const chatActions = chatSlice.actions;

export default chatSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL } from "../constants/constants";

const initialState = {
    profileUser: null,
    isFollowed: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setProfileUser: (state, action) => {
            state.profileUser = action.payload;
        },
        followUser: (state) => {
            state.isFollowed = true;
        },
        unfollowUser: (state) => {
            state.isFollowed = false;
        }
    }
})

export const fetchProfileUser = (user, username) => {
    return async (dispatch) => {
        try {
            const { data: profileUser } = await axios.get(backendURL + '/user/user?username=' + username);
            dispatch(profileSlice.actions.setProfileUser(profileUser));
            const alreadyFollowed = profileUser.followers.find(f => f === user._id);
            if (alreadyFollowed) dispatch(profileSlice.actions.followUser());
        } catch (err) {
            console.log(err); 
        }
    }
}

export const followProfileUser = (user, profileUser) => {
    return async (dispatch) => {
        try {
            await axios.put(backendURL + `/user/${profileUser._id}/follow`, { userId: user._id });
            dispatch(profileSlice.actions.followUser());
        } catch (err) {
            console.log(err); 
        }
    }
}

export const unfollowProfileUser = (user, profileUser) => {
    return async (dispatch) => {
        try {
            await axios.put(backendURL + `/user/${profileUser._id}/unfollow`, { userId: user._id });
            dispatch(profileSlice.actions.unfollowUser());
        } catch (err) {
            console.log(err); 
        }
    }
}

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;

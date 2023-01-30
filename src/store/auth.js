import { LineAxisOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoggedIn: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null
        }
    }
})

export const tryLogin = () => {
   return async (dispatch) => {
        const fetchUser = async () => {
            const { data } = await axios.get('http://localhost:8000/auth/checkAuthentication');
            console.log(data);
            if (data.authenticated){
                dispatch(authSlice.actions.login());
            }
        }
        console.log("HERE");
        fetchUser();
   } 

}

export const authActions = authSlice.actions;

export default authSlice.reducer;
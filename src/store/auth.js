import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL } from "../constants/constants";

const userInLocalStorage = JSON.parse(localStorage.getItem('CO_user'));

const initialState = {
    isLoggedIn: userInLocalStorage ? true : false,
    user: userInLocalStorage
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
            state.user = undefined;
        },
    }
})

// // For OAuth
// export const tryLogin = () => {
//    return async (dispatch) => {
//         const fetchUser = async () => {
//             const { data } = await axios.get('http://localhost:8000/auth/checkAuthentication');
//             console.log(data);
//             if (data.authenticated){
//                 dispatch(authSlice.actions.login());
//             }
//         }
//         console.log("HERE");
//         fetchUser();
//    } 

// }
// 


export const loginUser = (userData) => {
    return async (dispatch) => {
        const saveUser = async() => {
            const { data } = await axios.post(backendURL + '/login', userData);
            if (data.msg){
              return (data.msg);   
            }
            dispatch(authSlice.actions.login(data));
            localStorage.setItem('CO_user', JSON.stringify(data));
        }
        return { err: await saveUser()};
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        localStorage.setItem('CO_user', null);
        dispatch(authSlice.actions.logout());
    }
}

export const authActions = authSlice.actions;

export default authSlice.reducer;
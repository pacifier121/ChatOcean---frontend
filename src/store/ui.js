import { createSlice } from "@reduxjs/toolkit";
import Modal from "../components/Modal/Modal";

const initialState = {
    modalActive: false,
    modal: null,
    loginError: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload;
        },
        setModalActive: (state) => {
            state.modalActive = true;
        },
        setModalInactive: (state) => {
            state.modalActive = false;
        },
        setLoginError: (state, action) => {
            state.loginError = action.payload;
        }
    }
})

export const removeModal = () => {
    return async(dispatch) => { 
        dispatch(uiSlice.actions.setModal(null));
        dispatch(uiSlice.actions.setModalActive(false));
    }
}

export const displayModal = (modal) => {
    return async(dispatch) => { 
        dispatch(uiSlice.actions.setModal(modal));
        dispatch(uiSlice.actions.setModalActive(true));
    }
}


export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

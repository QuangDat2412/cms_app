import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'),
    user: {},
    isLoading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateToken(state, { payload }) {
            state.token = payload;
            state.isLoading = false;
        },
        login(state) {
            state.isLoading = true;
        },
        getCurrentUser(state) {
            state.isLoading = true;
        },

        getCurrentUserSuccess(state, { payload }) {
            state.isLoading = false;
            state.user = payload;
        },
        logout(state) {
            localStorage.removeItem('token');
            state.token = null;
            state.user = {};
        },
    },
});

// actions
export const loginActions = loginSlice.actions;

// selector

export const loginSelector = {
    token: (state) => state['login'].token,
    isLoading: (state) => state['login'].isLoading,
    user: (state) => state['login'].user,
};
// reducer
const loginReducer = loginSlice.reducer;

export default loginReducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    sidebarShow: true,
    toasrt: {},
    sidebarUnfoldable: true,
    options: JSON.parse(localStorage.getItem('options')),
};

const othersSlice = createSlice({
    name: 'others',
    initialState,
    reducers: {
        changePageLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        toggleSideBar: (state, { payload }) => {
            state.sidebarShow = payload;
        },
        showToasrt: (state, { payload }) => {
            state.toasrt = payload;
        },
        sidebarUnfoldable: (state, { payload }) => {
            state.sidebarShow = payload;
        },
        getOptions: () => {},
        saveOptions: (state, { payload }) => {
            state.options = payload;
        },
    },
});

export const OthersAction = othersSlice.actions;
export const OthersSelector = {
    isLoading: (state) => state['others'].isLoading,
    toasrt: (state) => state['others'].toasrt,
    sidebarShow: (state) => state['others'].sidebarShow,
    sidebarUnfoldable: (state) => state['others'].sidebarUnfoldable,
    options: (state) => state['others'].options,
};

export default othersSlice.reducer;

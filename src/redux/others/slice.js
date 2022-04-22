import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
};

const othersSlice = createSlice({
    name: 'others',
    initialState,
    reducers: {
        changePageLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
    },
});

export const { changePageLoading } = othersSlice.actions;
export const OthersSelector = {
    isLoading: (state) => state['others'].isLoading,
};

export default othersSlice.reducer;

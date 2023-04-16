import { State } from '@/types/redux/State';
import { createSlice } from '@reduxjs/toolkit';
import { getProperties, createProperties, deleteProperties, updateProperties } from './thunks';
import { Property } from '@itaaj/types';

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        result: {},
        loading: false,
        error: undefined,
        success: false,
    } as State<Property>,
    reducers: {
        resetProperties: (state) => {
            (state.loading = false), (state.success = false), (state.error = '');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProperties.pending || createProperties.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(getProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.result = action.payload;
            })
            .addCase(getProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(createProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProperties.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(deleteProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.success = action.payload;
            })
            .addCase(deleteProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateProperties.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(updateProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(updateProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { resetProperties } = propertiesSlice.actions;
export default propertiesSlice;
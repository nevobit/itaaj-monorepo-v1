import { Property } from '@itaaj/types';
import { State } from '@/types/redux/State';
import { configureStore } from '@reduxjs/toolkit';
import propertiesSlice from './states/properties/slice';

export interface AppStore {
    properties: State<Property>;
}

export default configureStore({
    reducer: {
        properties: propertiesSlice.reducer,
    },
});

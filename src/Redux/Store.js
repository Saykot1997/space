import { configureStore } from '@reduxjs/toolkit';
import SpaceReducer from './SpaceSlice';


export const store = configureStore({
    reducer: {
        Space: SpaceReducer
    },
})
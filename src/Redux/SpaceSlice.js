import { createSlice } from '@reduxjs/toolkit'

export const SpaceSlice = createSlice({
    name: 'Space',
    initialState: {
        Space: [],
    },
    reducers: {
        fatchSpace: (state, actions) => {
            state.Space.push(actions.payload);

        },
    }
})

export const { fatchSpace } = SpaceSlice.actions

export default SpaceSlice.reducer
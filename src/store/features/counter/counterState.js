import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmountAsync: (state, action) => { },
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmountAsync } = counterSlice.actions

export default counterSlice.reducer
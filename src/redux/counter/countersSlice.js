import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  isLoading:false,
  data:null,
  error:false
}
export const fetchFacts = createAsyncThunk(
  'fetchFacts',
  async () => {
   const response = await fetch('https://cat-fact.herokuapp.com/facts')
   return response.json()
  }
)
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:(building) => {
    building.addCase(fetchFacts.pending,(state,action) => {
      state.isLoading = true
    })
    building.addCase(fetchFacts.rejected,(state,action) => {
      state.isLoading = false
      state.error = true
    })
    building.addCase(fetchFacts.fulfilled,(state,action) => {
      state.data = action.payload
      state.isLoading = false
    })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
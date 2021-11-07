
import { createSlice } from '@reduxjs/toolkit'
// import { AppDispatch, AppThunk } from '..'

const initialStatus = {
    status:0
}

export const slice = createSlice({
  name: 'status',
  initialState: initialStatus,
  reducers: {
    changeStatus(state, { payload }) {
      return {...payload }
    }
  }
})

export const { changeStatus } = slice.actions
export default slice.reducer
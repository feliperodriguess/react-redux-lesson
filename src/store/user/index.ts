import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '..'
import { changeStatus, handleStatus } from '../status'

const initialUserState = {
  name: '',
  location: '',
  followers: 0,
  following: 0,
  repos: 0,
  email: '',
  avatar_url: '',
  isLogged: false,
}

export const slice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, ...payload }
    },
    logout(state) {
      return { ...state, ...initialUserState }
    },
  },
})

export const { changeUser, logout } = slice.actions
export default slice.reducer

export const updateUser = async (name: string): Promise<AppThunk> => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`)
      if (response.ok) {
        const responseJSON = await response.json()
        dispatch(changeUser(responseJSON))
        dispatch(changeStatus(response.status))
      } else {
        dispatch(changeUser(initialUserState))
        dispatch(changeStatus(response.status))
      }
    } catch (error) {
      dispatch(changeUser(initialUserState))
      dispatch(changeStatus(0))
    }
  }
}

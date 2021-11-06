import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '..'


export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, name: payload }
    },
    logout(state) {
      return { ...state, isLogged: false, name: '' }
    }
  }
})

export const { changeUser, logout } = slice.actions
export default slice.reducer

export const updateUser = async (name:string):Promise<AppThunk> => {
  return(async (dispatch:AppDispatch) => {
    const data = await fetch(`https://api.github.com/users/${name}`)
    const dataJSON= await data.json()
    dispatch(changeUser(dataJSON.name))
  })
}
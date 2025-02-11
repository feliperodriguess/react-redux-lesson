import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './user/'
import statusReducer from './status/'

const store = configureStore({
  reducer:{
    user: userReducer,
    status: statusReducer

  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void,RootState,null,Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>() 

export default store
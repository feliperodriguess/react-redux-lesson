import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
// import { AppDispatch, AppThunk } from '..'

const initialStatus = {
  status: 0,
}

export const slice = createSlice({
  name: 'status',
  initialState: initialStatus,
  reducers: {
    changeStatus(state, { payload }) {
      handleStatus(`name`, payload)
      return { ...state, status: payload }
    },
  },
})

export const { changeStatus } = slice.actions
export default slice.reducer

export const handleStatus = (name: string, status: number) => {
  if (status === 200) {
    toast.success(`${name} logado`, {
      autoClose: 3000,
    })
  }
  if (status === 404) {
    toast.error('Usuário não encontrado', {
      autoClose: 3000,
    })
  }
  if (status === 403) {
    toast.error('Limite de tentativas excedido', {
      autoClose: 3000,
    })
  }
}

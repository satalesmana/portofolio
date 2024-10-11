import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
      name: '',
      email: '',
      phone: '',
      gender: '',
    },
    reducers: {
        setData:(state, action)=>{
            state = { ...state, ...action.payload }
            console.log('state', state)
        },
        resetData:(state)=>{
            state = {
                name: '',
                email: '',
                phone: '',
                gender: '',
            }
        }
    }
})

export const { setData, resetData} = accountSlice.actions
export default accountSlice.reducer
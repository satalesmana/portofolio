import { createSlice } from '@reduxjs/toolkit'

export const educationSlice = createSlice({
    name: 'education',
    initialState: {
        formInput:{
            _id:'',
            nama_kampus:'',
            alamat_kampus:'',
            tahun_lulus:'',
            ipk:'',
            program_studi:'',
            jenjang_pendidikan:''
        }
    },
    reducers: {
        setData:(state, action)=>{
            state.formInput = {...state.formInput, ...action.payload}
        },
        resetData:(state)=>{
            state.formInput = {
                _id:'',
                nama_kampus:'',
                alamat_kampus:'',
                tahun_lulus:'',
                ipk:'',
                program_studi:'',
                jenjang_pendidikan:''
            }
        }
    }
})

export const { setData, resetData} = educationSlice.actions
export default educationSlice.reducer
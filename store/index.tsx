import { configureStore } from '@reduxjs/toolkit'
import  accountReducer  from './reducer/accountReducer'
import  educationReducer  from './reducer/educationReducer'


export default configureStore({
  reducer: {
    account: accountReducer,
    education: educationReducer,
  },
})
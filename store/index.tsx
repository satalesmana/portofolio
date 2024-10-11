import { configureStore } from '@reduxjs/toolkit'
import  accountReducer  from './reducer/accountReducer'

export default configureStore({
  reducer: {
    account: accountReducer
  },
})
import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../cart/cartsSlice'


// console.log(cartSlice)
 export const store =configureStore({
    reducer:{
         cart:cartSlice.reducer
    }


})
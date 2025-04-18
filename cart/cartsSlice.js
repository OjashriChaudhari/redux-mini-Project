import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../src/cartData";

const data = {
    cartData: cartItems,
    itemsAmount: 4,
    totalPrice: 2199.96,

}

    const cartSlice = createSlice({
        name:'cart',
        initialState:data,
        reducers:{
            clearCart:(state)=>{
                state.cartData=[]
                state.totalPrice=0
                state.itemsAmount=0
        },
        removeItem:(state,action)=>{
            // console.log(action.payload)
            let id = action.payload
            state.cartData = state.cartData.filter((item)=>item.id !== id)
            // console.log(id)
        },
        increase:(state, action)=>{
            let id = action.payload
            let newdata = state.cartData.find((item)=>{
                return item.id == id
            })    
            newdata.amount = newdata.amount + 1
            
        },
        decrease:(state, action)=>{
            let id = action.payload
            let newdata = state.cartData.find((item)=>{
                return item.id == id
            })    
            newdata.amount = newdata.amount - 1
        },
        total:(state)=>{
            let sum = 0
            let items = 0
            state.cartData.forEach((item)=>{
                 sum = sum + item.price * item.amount
                 items += item.amount
            })
            state.totalPrice = sum
            state.itemsAmount = items
        }
        }
    })

    // console.log(cartSlice)
    export const {clearCart,removeItem,increase,decrease,total} = cartSlice.actions

    export default cartSlice
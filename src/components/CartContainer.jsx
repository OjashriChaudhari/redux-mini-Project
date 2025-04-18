import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart,total } from '../../cart/cartsSlice';
import Item from './Item';


const CartContainer = () => {

    const {cartData,itemsAmount,totalPrice}= useSelector((store)=>store.cart);
  //  console.log(cartData,itemsAmount,totalPrice)

    const dispatch = useDispatch()

    if (itemsAmount <1) {
      return((
        <section className="empty-cart-container">
          <header>
            <h2>Your Bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      ))

    
    }
  return (
    <section className='cart'>
      <header>
        <h2>Your Cart</h2>
      </header>

      <div>
        {
          cartData.map((item,index)=>{
            // console.log(item)
            return(
              <Item key={index} item={item}/>
            )
          })
        }
        <hr />
      </div>
      <footer>
        <div className="cart-total">
          <h4>Total <span>${totalPrice.toFixed(2)}</span></h4>
        </div>
        <button className='btn clear-btn' onClick={()=> dispatch(clearCart())}>Clear cart</button>
      </footer>

     
    </section>
  )
}

export default CartContainer

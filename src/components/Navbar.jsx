import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from 'react-redux';


const Navbar = () => {

    const {itemsAmount} = useSelector((store)=>store.cart)


  return (
    <nav>
      <div className="nav-center">
        <h3>Redux ToolKit</h3>
        <div className="nav-container">
            <HiOutlineShoppingBag className='cartIcon'/>
            <div className="amount-container">
                <p className='total-amount'>{itemsAmount}</p>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

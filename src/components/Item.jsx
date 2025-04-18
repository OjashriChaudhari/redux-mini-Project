import React from 'react'
import { FaAngleUp,FaAngleDown } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { removeItem,increase,decrease} from '../../cart/cartsSlice';
const Item = ({item}) => {
    // console.log(item)
    const dispatch = useDispatch()
  return (
  
    <div className='item-container'>
      <img src={item.img} alt={item.title} />

        <div>
        <h4>{item.title}</h4>
        <h4 className='item-price'>${item.price}</h4>
        <p className='remove-btn' onClick={()=>dispatch(removeItem(item.id))}>remove</p>
        </div>

        <div className="amount-btn">
            <FaAngleUp className='upDown-icon' onClick={()=>{
              dispatch(increase(item.id));
              }}/>

            <p className='amount'>{item.amount}</p>
            
            <FaAngleDown className='upDown-icon' 
            onClick={()=>{
              if(item.amount === 0 ){
                dispatch(removeItem(item.id))
                return;
              }
                dispatch(decrease(item.id))}}
             />
        </div>

        
      </div>
    

  )
}

export default Item

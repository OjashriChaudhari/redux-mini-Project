
import Navbar from './components/Navbar'
import './components/style.css'
import CartContainer from "./components/CartContainer"
import { useSelector, useDispatch } from 'react-redux'
import { total } from '../cart/cartsSlice'
import { useEffect } from 'react'

function App() {
  
 const {cartData}  = useSelector(store=>store.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(total())
  },[cartData])

  return (
    <>
        <Navbar/>
        <CartContainer/>
    </>
  )
}

export default App

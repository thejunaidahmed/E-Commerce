import React from 'react'
import './Cart.css'
import CartCard from '../../components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import emptyCard from '../../assets/emptycart.png'

function Cart() {

  let items = useSelector(state => state)
  let totalPrice = items.cart.reduce((a,b)=>a+b.price,0)

  return (
    <div className='cart'>
      {items.cart.length ? <div className='CartCard-section'>
        {items.cart.map((item) => (
          <CartCard name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))}
      </div> : <div className='empty-card'>
        <img src={emptyCard} />
        <h1>Empty Card</h1>
      </div>}
      <div className='price-section'>
        <span>Total Products: {items.cart.length}</span>
        <span>Total Price: {totalPrice}</span>
      </div>
    </div>
  )
}

export default Cart
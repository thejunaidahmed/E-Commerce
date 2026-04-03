import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import './CartCard.css'
import image1 from "../../assets/image1.jpg"
import { RemoveItem } from '../../Redux/CartSlice';
import { useDispatch } from 'react-redux';

function CartCard({ name, price, image, id }) {
    
    let dispatch = useDispatch()

  return (
      <div className='CartCard'>
          <div className='left-card'>
              <img src={image} />
              <div className='name-price'>
                  <span>{name}</span>
                  <span>Rs {price}</span>
              </div>
          </div>
          <div className='right-card'>
              <button onClick={() => {
                  dispatch(RemoveItem(id))
                  alert('Product removed successfully✔✔')
              }}>Remove <RiDeleteBinLine/></button>
          </div>
    </div>
  )
}

export default CartCard
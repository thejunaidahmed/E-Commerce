import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import { AddItem } from '../../Redux/CartSlice'

function Product({ name, price, image, id }) {
  
  let dispatch = useDispatch()

  return (
      <div className='product'>
          <div className='product-image'>
              <img src={image} />
              </div>
              <div className='product-detail'>
                  <span className='name'>{name}</span>
                  <span className='price'>Rs {price}</span>
        <button onClick={() => {
          dispatch(AddItem({name:name,image:image,price:price,id:id}))
                  alert('Product added successfully✔✔')}}>ADD +</button>
              </div>
    </div>
  )
}

export default Product
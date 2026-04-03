import React, { useState } from 'react'
import { category } from '../../Category'
import './Shop.css'
import Product from '../../components/Product/Product'
import { dummydata } from '../../dummyData'
import { FaBagShopping } from "react-icons/fa6";

function Shop() {

  const [productCategory, setProductCategory] = useState(dummydata)

  const filterProducts = (category) => {
    if (category === "All") {
      setProductCategory(dummydata)
    } else {
     const updateData =  dummydata.filter((item) => (
      item.category === category
    ))
    setProductCategory(updateData)
  } 
    }

  return (
    <div className='shop'>
      <h1 className='heading'>
        <span>Shop</span>
        <FaBagShopping/>
      </h1>
      <div className='category'>
        {category.map((items, index) => {
          console.log(items)
          return (
            <div key={index} className='card' onClick={()=>filterProducts(items.name)}>
              <img src={items.image} />
              <span>{items.name}</span>
            </div>
          )
        })}
      </div>
      <div className='product-section'>
        {productCategory.map((item) => {
          return (
            <Product key={item.id} name={item.name} image={item.image} price={item.price} id={item.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Shop
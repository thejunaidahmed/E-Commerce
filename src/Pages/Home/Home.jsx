import React, { useState } from 'react'
import bg from '../../assets/bg0.gif'
import './Home.css'
import { category } from '../../Category'
import Product from '../../components/Product/Product'
import { dummydata } from '../../dummyData'

function Home() {

  const [productCategory, setProductCategory] = useState(dummydata)

  const filterProducts = (category) => {
    const updateData =  dummydata.filter((item) => (
      item.category === category
    ))
    setProductCategory(updateData)
  }

  return (
    <div className='home'>
      <div className='hero-bg'>
        <img src={ bg} />
      </div>

      <div className='category'>
        {category.slice(0,5).map((items, index) => {
          console.log(items)
          return (
            <div key={index} className='card' onClick={()=>filterProducts(items.name)}>
              <img src={items.image} />
              <span>{items.name}</span>
            </div>
          )
        })}
      </div>
      <h1>Trending Products</h1>
      <div className='product-section'>
        {productCategory.slice(0,7).map((item) => {
          return (
            <Product key={item.id} name={item.name} image={item.image} price={item.price } id={item.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

function Nav() {

  let dispatch = useDispatch()
  let items = useSelector(state => state.cart)
  console.log(items);
  

  return (
    <div className='nav'>
      <div className='top-nav'>
        
        <div className='logo'>
          <span>Shopinity</span>
          <GiShoppingCart />
        </div>

        <div>
          <form className='search-box'>
            <input type='text' placeholder='Search Items...' />
            <button><IoMdSearch/></button>
          </form>
        </div>

        <NavLink to='/cart'>
          <div className='cart-box'>
          <LuShoppingCart />
          <span>{items.length}</span>
        </div>
        </NavLink>

      </div>

      <div className='bottom-nav'>
        <NavLink to='/'><li><FaHome/> Home</li></NavLink>
        <NavLink to='shop'><li><FaBagShopping/> Shop</li></NavLink>
        <NavLink to='cart'><li><FaCartShopping/> Cart</li></NavLink>
        <NavLink to='contact'><li><RiContactsFill/> Contact</li></NavLink>
      </div>
      
    </div>
  )
}

export default Nav
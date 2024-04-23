import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sidebar.css'
import add_product_icon from '../Assets/Product_Cart.svg';
import list_product_icon from '../Assets/Product_list_icon.svg'

const SideBar = () => {
  
  return (
    <div className='sidebar'>
      <NavLink to={'/admin/addproduct'} style={{textDecoration: "none"}}>
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
      </NavLink>
      <NavLink to={'/admin/listproduct'} style={{textDecoration: "none"}}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
      </NavLink>
    </div>
  )
}

export default SideBar

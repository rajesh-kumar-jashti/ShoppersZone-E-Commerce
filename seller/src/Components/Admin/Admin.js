import React from 'react'
import SideBar from '../SideBar/SideBar'
import AddProduct from '../AddProduct/AddProduct'
import ListProduct from '../ListProduct/ListProduct'
import {Route, Routes} from 'react-router-dom'

const Admin = () => {
  return (
    <div style={{display:"flex"}}>
      <SideBar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproduct' element={<ListProduct/>} />
      </Routes>
    </div>
  )
}

export default Admin

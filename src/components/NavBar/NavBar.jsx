import React from 'react'
import"./NavBar.css"
import {Route, Link} from "react-router-dom"
const NavBar = ()=>  {
  return (
    <>
    <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
    </ul>
    </>
  )
}

export default NavBar
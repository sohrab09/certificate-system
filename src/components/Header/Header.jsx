import React from 'react'
import TopHeader from '../TopHeader/TopHeader'
import Navbar from '../Navbar/Navbar'
// import NavItem from '../NavItem/NavItem'

function Header() {
  return (
    <header>
      <TopHeader />
      {/* <NavItem /> */}
      <Navbar />
    </header>
  )
}

export default Header
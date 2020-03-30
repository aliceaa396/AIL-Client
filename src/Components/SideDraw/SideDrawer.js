import React from 'react'
import './SideDrawer.css'

export default function SideDrawer(props) {
  let drawerClasses = 'side-drawer';

  if(props.show) {
    drawerClasses = 'side-drawer open';
  }
  
  return (   
    <nav className={drawerClasses}> 
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="/aboutUs"> About Us </a>
        </li>
      </ul>
    </nav>
  )
}

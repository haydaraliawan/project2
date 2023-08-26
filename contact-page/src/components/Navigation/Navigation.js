import React from 'react';
import style from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={style.flex_container}>
      <nav className={style.nav}>
        <div className='logo'>
            <img src="/Frame 2 1.png" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation

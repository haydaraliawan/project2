import React from 'react'
import style from './Button.module.css'
const Button = ({text, icon, isOutline=false}) => {
  return (
    <button className={isOutline ? style.btn_outline : style.btn} >
        {icon}
        {text}
    </button>
  )
}

export default Button

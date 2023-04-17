import React from 'react'
import '../css/dice.css'

const Button = ({num ,handleClick}) => {
  return (
    <div className='display'>    
        <p className='number'>Dice : {num ? `${num}` : 0 } </p>
        <button type="button" className='button' onClick={handleClick}>Roll</button>
    </div>
  )
}

export default Button
import React from 'react'
import '../css/dice.css'

import Button from './Button'

const Display = ({isLastTurnFirstPlayer, image, num, handleClick}) => {
  return (
    <React.Fragment>

        <div>
            <h1> Dice and Roll</h1>
            <div className='move'>
                {
                    num 
                    ? 
                    <p>{isLastTurnFirstPlayer ? 'Player 1' : 'Player 2' } Move Ahead {num} times</p>
                    :
                    <p>Player 1 is going to Start</p>
                    
                }
            </div>
            
            <div className="imgContainer">
                {
                num 
                ?
                <img src={image} alt='dice' style={{height:"100px", width:"100px"}}/>
                :
                <img src={image} alt='dice' style={{height:"100px", width:"100px"}}/>
                } 

            </div>
            <Button num = {num} handleClick={handleClick} />
        </div>

    </React.Fragment>
  )
}

export default Display
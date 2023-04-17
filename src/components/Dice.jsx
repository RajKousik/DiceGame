import React from 'react'
import { useState } from 'react';

import dice1 from '../assets/dice1.png';
import dice2 from '../assets/dice2.png';
import dice3 from '../assets/dice3.png';
import dice4 from '../assets/dice4.png';
import dice5 from '../assets/dice5.png';
import dice6 from '../assets/dice6.png';
import initialDice from '../assets/initialDice.png'

import '../css/dice.css'

import Button from './Button'
import User from './User'
import User2 from './User2'
import Display from './Display'


const Dice = () => 
{
    const array = [dice1, dice2, dice3, dice4, dice5, dice6];

   const [num, setNum] = useState(null); 
   const [isFirstPlayer, setIsFirstPlayer] = useState(true);
   const [isLastTurnFirstPlayer, setIsLastTurnFirstPlayer] = useState(null);

   const [image, setImage] = useState(initialDice);

   const MINIMUM_DICE_VALUE = 1;
   const MAXIMUM_DICE_VALUE = 6;


   const handleClick = () => {
        
       
       const randomvalue = Math.floor(Math.random() * (MAXIMUM_DICE_VALUE - MINIMUM_DICE_VALUE + 1)) + MINIMUM_DICE_VALUE;
       setNum(randomvalue);

       setImage(array[randomvalue-1]);
       
       if(randomvalue !== 1 && randomvalue !== 6)
       {
           setIsLastTurnFirstPlayer(isFirstPlayer);
           setIsFirstPlayer(!isFirstPlayer);
        }
        else
        {
            setIsLastTurnFirstPlayer(isFirstPlayer);
        }

   }

  return (
      <React.Fragment>

        <div className="wrapper">
            <div className='container'>
                <User isFirstPlayer = {isFirstPlayer} />
                <Display isLastTurnFirstPlayer={isLastTurnFirstPlayer} image={image} num={num} handleClick={handleClick}/>
                <User2 isFirstPlayer={isFirstPlayer}/> 
            </div>
            {/* <Button num = {num} handleClick={handleClick} /> */}
        </div>

    </React.Fragment>
  )
}

export default Dice
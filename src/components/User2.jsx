import React from 'react'
import img from '../assets/user.png';
import '../css/dice.css'


const User2 = ({isFirstPlayer}) => {
  // console.log(isFirstPlayer);
  return (
    <React.Fragment>
        <div className='user  user2' style={ !isFirstPlayer ? {backgroundColor:"green"} : {backgroundColor:"white"}}>
            <img src={img} alt="name"  />
            <p>User 2</p>
            <div className="chance">
                <h3>{!isFirstPlayer ? 'Your Chance' : 'Wait for your chance!'}</h3>
            </div>
        </div>    
        
    </React.Fragment>
  )
}

export default User2
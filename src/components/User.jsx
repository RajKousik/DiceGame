import React from 'react'
import '../css/dice.css';
import img from '../assets/user.png';

const User = ({isFirstPlayer}) => {
  return (
    <React.Fragment>

        <div className='user user1'  style={ isFirstPlayer ? {backgroundColor:"green"} : {backgroundColor:"white"}}>
            <img src={img} alt="name" />
            <p>User 1</p>
            <div className="chance">                      
                <h3>{isFirstPlayer ? 'Your Chance' : 'Wait for your chance!'}</h3>
            </div>
        </div>





    </React.Fragment>
  )
}

export default User
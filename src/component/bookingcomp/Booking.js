import React from 'react'
import "./Booking.css"
import { Link } from 'react-router-dom'
function Booked() {
  return (
<div class="confirmation-container">
        <i class="uil uil-check-circle confirmation-icon"></i>
        <h1>Provide us your contact info</h1>
        <h2>So we can gie u a memorable experience to you!</h2>
        <form>
        <label>Name</label>
        <input type='text' placeholder='Enter your name'/>
        <label>Email-id</label>
        <input type='email' placeholder='Enter your email'/>
        <label>Mobile Number</label>
        <input type='text' placeholder='Enter your mobile no.'/></form>
    <Link to="/booked"> <button className='btn' type='submit'>Confirm</button></Link>   
    </div>  
  )
}

export default Booked
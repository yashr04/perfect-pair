import React, { useState } from 'react';
import "./Service.css";
import { Link } from "react-router-dom";
 
const Service = ()=>{

  return (
    <div className='container'>
      <h1 className='title'> Choose a Destination</h1>
      <div className='cards'>
        
      <Link to="/service/udaipur/udaipur" className="text-ser">
        <div className='card'>
          <img className='image' src="https://www.holidify.com/blog/wp-content/uploads/2014/09/oberoi_udaivilas.jpg"/>
          <span>Udaipur</span>
        </div>
      </Link>

      <Link to="/service/jaipur/jaipur" className="text-ser">
        <div className='card'>
          <img className='image' src="https://www.holidify.com/blog/wp-content/uploads/2014/09/umaid_bhava_palace.jpg"/>
          <span>Jaipur</span>
        </div>
        </Link>

        <Link to="/service/jaipur/jaipur" className="text-ser">
        <div className='card'>
          <img className='image' src="https://www.holidify.com/blog/wp-content/uploads/2014/09/wedding-11.jpg"/>
          <span>Shimla </span>
        </div>
        </Link>

        <Link to="/service/udaipur/udaipur" className="text-ser">
        <div className='card'>
          <img className='image' src="https://voguetracker.files.wordpress.com/2015/07/20609.jpg"/>
          <span>Lavasa</span>
        </div>
        </Link>

        <Link to="/service/jaipur/jaipur" className="text-ser">
        <div className='card'>
          <img className='image' src="https://www.campbrook.com/wp-content/uploads/2023/04/1.jpg"/>
          <span>Rishikesh</span>
        </div>
        </Link>

        <Link to="/service/jaipur/jaipur" className="text-ser">
        <div className='card'>
          <img className='image' src="https://i.pinimg.com/736x/78/94/a3/7894a380015273e5fdcbb53ff48e79b8.jpg"/>
          <span>Kerala</span>
        </div>
        </Link>
        

      </div>
    </div>
  );
}
export default Service;




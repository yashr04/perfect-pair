import { useState } from "react"
import { Link } from 'react-router-dom';


function Card({id ,name, image, info, price, removeTheme}){

    const[readmore, setReadMore] = useState(false);

    const description = readmore ?info :`${info.substring(0,200)}... `

    function readmoreHandler(){
        setReadMore(!readmore);
    }

   
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price"> ₹ {price}</h4>
                    <h4 className="tours-name">{name}</h4>
                </div>
                <div className="description"> 
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`:'Read More'}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=> removeTheme(id)}>    
                Not Interested
            </button>
            <Link to={`/booking/${id}`} className="book-now-button">
              Book Now
            </Link>











        </div>
    );
}


export default Card;
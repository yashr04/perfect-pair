import { useState } from "react";
import { Link } from "react-router-dom";


function Card({id ,name, image,figma}){

    const[readmore, setReadMore] = useState(false);

    function readmoreHandler(){
        setReadMore(!readmore);
    }

   
    return(
        <Link to="/server">  
        <div className="card">
            <img src={image} className="image"></img>
            <figcaption className="fig">{figma}</figcaption>
            
             <h4 className="tour-name">{name}</h4>
        </div>
        </Link>
            
    );
}


export default Card;
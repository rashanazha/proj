import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";
function Card(props){
    const data = props.data;
    return(
        
 <div className="card">
  <img src={data.img} alt="" id="img"/>
  <span className="title">{data.name}</span>
  <span className="price">{data.price} $</span>
  <Link to={data.url}>
  <button id="button">View more</button>
  </Link>
</div>
    
    );
}

export default Card;
import React from "react";
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Player(props){
    console.log(props);
    const {name,img,price} = props.player;
    return(
        <div>
            <h1>{name}</h1>
            <img src = {img} />
            <h2>{price}</h2>
            <button>Select</button>
        </div>
    );
}
export default Player;
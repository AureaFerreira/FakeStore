import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Card({title,price, category, image}) {
    return(
        <div className="card">
        <img src={image} className="card-img-top" alt={title}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">R${price.toFixed(2)}</p>
            <button className="btn btn-outline-success mx-auto">Comprar</button>
        </div>
        </div>
    );
}

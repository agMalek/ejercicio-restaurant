import { useEffect, useState } from 'react';
import './CardPremium.css'

const CardPremium = ({id, nombre, ingredientes, precio, imagen}) => {

    
    return (  
        <div className="row card cardPremium" >
            <div className='col-5'>
                <img className="card-img-top" src={require(`../../../assets/img/premium/${imagen}.png`)} alt={nombre} />
            </div>
            <div className='col-7'>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                </div>
                <p>${precio}</p>
                <button className='btn btn-warning'>Ordenar</button>
            </div>

        </div>
    );
}
 
export default CardPremium;
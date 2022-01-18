import './Buscada.css'

const Buscada = ({id, nombre, ingredientes, precio, imagen}) => {
    console.log(imagen)
    return (
        <div className="card shadow" style={{width: "18rem"}}>
            <img className="card-img-top" src={require(`../../../assets/img/buscadas/${imagen}.png`)} alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <ul>
                    {
                        ingredientes.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))
                    }
                </ul>
                <p>${precio}</p>
                <button className='btn btn-warning'>Ordenar</button>
            </div>
        </div>
    );
}

export default Buscada;
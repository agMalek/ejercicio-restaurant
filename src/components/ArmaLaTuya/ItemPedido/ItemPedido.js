import './ItemPedido.css'

const ItemPedido = ({nombre, imagen, precio, id, sacarDelPedido}) => {
    return (  
        <div className='d-flex itemPedido'>
            <div className='d-flex w-25 px-1'>
                <img className='imgIngrediente' src={require(`../../../assets/img/ingredientes/${imagen}.png`)} alt={nombre} />
                <p className='px-2'>{nombre}</p>
            </div>
                {
                    id !== undefined ? 
                    <div className='d-flex w-75 justify-content-end align-items-center'>
                        <p className='px-3'>${precio}</p>
                        <button className='btn btn-danger' onClick={() => sacarDelPedido(id)}>Sacar</button>
                    </div>  
                    : ""
                }
        </div>
    );
}
 
export default ItemPedido;
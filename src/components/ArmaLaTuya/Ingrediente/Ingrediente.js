import './Ingrediente.css'

const Ingrediente = ({nombre, precio, imagen, id, agregarAPedido, agregado}) => {

    console.log(agregado)

    return (  
        <button className={`d-flex contenedorIngredientes ${agregado ? "agregado" : ""}`}  disabled={agregado} onClick={() => agregarAPedido(id)}>
            <div className='d-flex w-25 px-1'>
                <img className='imgIngrediente' src={require(`../../../assets/img/ingredientes/${imagen}.png`)} alt={nombre} />
                <p className='px-2'>{nombre}</p>
            </div>
            <div className='d-flex w-75 justify-content-end '>
                <p>${precio}</p>
            </div>
        </button>
    );
}
 
export default Ingrediente;
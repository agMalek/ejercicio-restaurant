import axios from "axios";
import { useEffect, useState } from 'react';
import './ArmaLaTuya.css'
import Ingrediente from "./Ingrediente/Ingrediente";
import ItemPedido from "./ItemPedido/ItemPedido";

const ArmaLaTuya = () => {


    const [ingredientes, setIngredientes] = useState([])
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        getIngredientes()
    }, [])

    const getIngredientes = async () => {
        const response = await axios.get("https://apipdtc.herokuapp.com/bulldog/ingredientes")
        setIngredientes(response.data)
    }

    useEffect(() => {
        console.log(ingredientes)
    }, [ingredientes])


    const agregarAPedido = (id) => {
        let ingNuevo = ingredientes.find(ing => ing.id === id)
        setPedido([...pedido, ingNuevo])
        setTotal(prev => prev + ingNuevo.precio)

    }

    const sacarDelPedido = (id) => {
        setPedido(pedido.filter(item => item.id !== id))
        setTotal(prev => prev - pedido.find(item => item.id === id).precio)
    }

    const confirmarPedido = () => {
        setPedido([])
        alert("Se confiró el pedido")
    }

    return (
        <>
            {
                ingredientes.length > 0 ?
                    <div className="contenedorArmaLaTuya p-2">
                        <h4 className="text-center my-4">Arma la tuya</h4>
                        <div className='row'>
                            <div className='col'>
                                {
                                    ingredientes.map(ing => (
                                        <Ingrediente agregarAPedido={agregarAPedido} agregado={pedido.some(item => item.id === ing.id)} {...ing} key={ing.id}/>
                                    ))
                                }
                            </div>
                           
                            {
                                pedido.length > 0 ?
                                    <div className="col d-flex flex-column align-items-center">
                                        <ItemPedido imagen={"Carne"} nombre={"Carne"} sacarDelPedido={sacarDelPedido}/>
                                        {
                                            pedido.map(item => (
                                                <ItemPedido key={item.id} {...item} sacarDelPedido={sacarDelPedido}/>
                                            ))
                                        }
                                        <p className="textTotal">Total: ${total}</p>
                                        <button onClick={() => confirmarPedido()} className="btnConfirmarPedido">Confirmar Pedido</button>
                                    </div>

                                :
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <h3>Empezá a seleccionar!</h3>
                                    </div>
                            }
                            
                        </div>
                    </div>
                    : <h4>Cargando...</h4>
            }
        </>
    );
}

export default ArmaLaTuya;
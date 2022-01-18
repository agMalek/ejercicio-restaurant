import axios from 'axios';
import { useState, useEffect} from 'react';
import Buscada from './Buscada/Buscada';
import './MasBuscadas.css'

const MasBuscadas = () => {
    
    const [buscadas, setBuscadas] = useState([])

    const getBuscadas = async() => {
        const response = await axios.get("https://apipdtc.herokuapp.com/bulldog/buscadas")
        setBuscadas(response.data)    
    }

    useEffect(() => {
        getBuscadas()
    },[])
    

    useEffect(() => {
        console.log(buscadas)
    },[buscadas])
    

    
    return (  
        <div className='my-4'>
            {
                buscadas.length > 0 ?
                <>
                    <h3 className='text-center my-4'>Las más buscadas</h3>
                    {
                        <div className='d-flex justify-content-evenly'>
                            {
                            buscadas.map((buscada) => (
                                <Buscada {...buscada} key={buscada.id}/>
                            ))
                            }
                        </div>
                    }

                </>:
                <h3>Cargando...</h3>
            }

        </div>
    );
}
 
export default MasBuscadas;
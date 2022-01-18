import { useState, useEffect } from 'react'
import axios from 'axios';
import CardPremium from './CardPremium/CardPremium'
import './Premuims.css'


const Premuims = ({}) => {
    const [premiums, setPremiums] = useState([])

    const getPremiums = async() => {
        const response = await axios.get("https://apipdtc.herokuapp.com/bulldog/premium")
        setPremiums(response.data)    
    }

    useEffect(() => {
        getPremiums()
    },[])
    

    useEffect(() => {
        console.log(premiums)
    },[premiums])
    

    
    return (  
        <div className='my-4'>
            {
                premiums.length > 0 ?
                <>
                    <h3 className='text-center my-4'>Las Premium</h3>
                    {
                        <div className='d-flex justify-content-evenly flex-wrap'>
                            {
                                premiums.map((premium) => (
                                    <CardPremium {...premium} key={premium.id}/>
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

export default Premuims;
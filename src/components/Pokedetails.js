import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Pokedetails = () => {

    const [pokeDetails, setPokeDetails] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokeDetails(res.data);
            }catch(error){
                console.error('cannot fetch details' , error);
            }
        };
        fetchData();
    },[id])

  return (
    <div>
        <h1>name</h1>
        <img src=""></img>
        <div className='abilities'>
            <div className='group'>
                <h2>blaze</h2>
            </div>
            <div className='group'>

            </div>
        </div>
        <div className='base-stat'>
            <h3>fg</h3>
            <h3>dfgdfg</h3>
            <h3>asdasx</h3>
            <h3>vcjghj</h3>
        </div>
    </div>
  )
}

export default Pokedetails

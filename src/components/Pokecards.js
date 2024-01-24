import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pokecards = () => {
  const [pokeData, setPokeData] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const fetchData = async () => {
    try{
        const response = await axios.get(url);
    setPokeData(response.data.results);
    setNextPage(response.data.next);
    setPreviousPage(response.data.previous);
    }catch(error){
        console.error('Cannot fetch data', error);
    }
    
  };

  const handlePagination = (url) =>{
    fetchData(url)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="cards-list">
        {pokeData.map((pokemon) =>(
            
           <div  key={pokemon.id} className="">
            <div className="">
                <h2>{pokemon.id}</h2>
                <img className=""
                     src={pokemon.sprites.front_default}
                     alt="poke"/>
                <h2>{pokemon.name}</h2>
                <Link to={`/pokemon/${pokemon.name}`}>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Link>
            </div>
           </div>
        ))}  
        </div>
      <div className="previous-next">
        {previousPage && <button onClick={()=> handlePagination(previousPage)}>previous</button> }
        {nextPage && <button onClick={()=> handlePagination(nextPage)}>previous</button> }
        <button>next</button>
      </div>
    </>
  );
};

export default Pokecards;

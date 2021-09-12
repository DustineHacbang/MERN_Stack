import React, {useState} from "react";
import axios from 'axios'

const Main = () => {

    const[pokemon,setPoke] = useState([])

    // const swAPI =() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(response => response.json())
    //         .then(jsonRes => console.log(jsonRes))
    //         .catch(error => console.log(error))
    // }

    const axiosCall=(e)=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => setPoke(response.data.results)) 
            .catch(error => console.log(error))
    }



    return(
        <div>
            <button onClick={axiosCall}>Get Pokemon</button>
            {pokemon.map((pokemon,index) => {
                return (<div key={index}>Name: {pokemon.name}</div>)
        })}
        </div>
    )
    }

export default Main
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const PlanetComp = (props) => {

    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then(res => {console.log(res);setData(res.data.results);})
        .catch(err => {console.error(err);setData({error: "These are not the droids you are looking for"})});}, [id]);

    return (
    data.error ?
    <h1>{data.error}</h1> :
    <div>
        <h1>Planet: {data.name}</h1>
        
        <p>Terrain: {data.terrain}</p>
        <p>Climate: {data.climate}</p>
        <p>Surface Water: {data.surface_water ? "true": "false"}</p>
        <p>Population: {data.population}</p>

    </div>
    );

}

export default PlanetComp;
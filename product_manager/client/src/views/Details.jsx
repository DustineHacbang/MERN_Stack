import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link, useHistory } from "react-router-dom"

const Details = () => {

    const {id} = useParams()
    const history = useHistory()
    const [productState, setProductState] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProductState(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => history.push("/dashboard"))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Product Details</legend>
            {   
                (productState) ?         
                <>
                    <h1>Title: {productState.title}</h1>
                    <h1>Price: {productState.price}</h1>
                    <h1>Product Description: {productState.description}</h1>
                    <Link to={`/products/${productState._id}/edit`}>Edit</Link>
                    <button onClick={deleteHandler}>Delete</button>
                </> : <h1>Loading....</h1>
            }
        </fieldset> 
    )
}

export default Details
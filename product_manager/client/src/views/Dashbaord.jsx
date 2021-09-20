import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashbaord = () => {

    const [products, setProducts] = useState([])
    // A FLIP STATE
    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [state])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => setState(!state))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Dashboard</legend>


            <ul>


                {
                    products.map((product, idx) => {
                        return(
                            <>
                            <li key={idx}>
                                <Link to={`/products/${product._id}`}>
                                    {product.title}
                                </Link>
                            </li>
                            <button onClick={() => deleteHandler(product._id)}>Delete</button>
                            </>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}

export default Dashbaord
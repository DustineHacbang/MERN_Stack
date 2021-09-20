import React, {useEffect, useState} from 'react'
import axios from "axios"

const Dashboard = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
    <fieldset>
        <legend>Dashboard.jsx</legend>
    </fieldset>
    )
}

export default Dashboard

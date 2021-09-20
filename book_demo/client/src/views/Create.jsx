import React, {useState} from "react"
import axios from "axios"

const Create = () => {

    const [formState, setFormState] = useState({
        title:"",
        pages: 0,
        auther: ""
    })
    const changeHandler = (e) =>{
        const { name, value} = e.target;
        setFormState({
            ...formState,
            [name] :value
        })
    }

    const submitHandler = e =>{
        e.preventDefualt();
        axios.post("http://localhost:8000/api/books", formState)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Create.Jsx</legend>
            <form onSubmit={submitHandler}>

            <p>
                Title:
                <input type="text" name="title" id="" onChange={changeHandler}/>
            </p>

            <p>
                Num Pages:
                <input type="number" name="pages" id="" onChange={changeHandler}/>
            </p>

            <p>
                Auther:
                <input type="text" name="author" id="" onChange={changeHandler}/>
            </p>

            <button type="submit">Create</button>

            </form>
        </fieldset>
    )
}

export default Create;
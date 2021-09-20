import React, {useState} from "react"
import axios from "axios"

const Create = () => {

    const [formState, setFormState] = useState({
        title:"",
        pages: -1,
        auther: ""
    })
    const [validState, setValidState] = useState ({})

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
            .then(res => console.log("THEN: ",res.data))
            .catch(err => {
                // console.log("CATCH:",err.response.data)

                const {errors} = err.response.data

                let errorObj = {}
                for(let [key,value] of Object.entries(errors)){
                    errorObj[key] =value.message
                }
                console.log(errorObj)
                setValidState(errorObj)
            })



        setFormState({
            title:"",
            pages: 0,
            auther: ""
        })
    }

    return (
        <fieldset>
            <legend>Create.Jsx</legend>
            <form onSubmit={submitHandler}>

            <p>
                Title:
                <input type="text" name="title" id="" onChange={changeHandler}/>
                {(validState.title) ?  <p style={{color: "red" }} >{validState.title}</p> :null }
            </p>

            <p>
                Num Pages:
                <input type="number" name="pages" id="" onChange={changeHandler}/>
                {(validState.pages) ?  <p style={{color: "red" }} >{validState.pages}</p> :null }
            </p>

            <p>
                Auther:
                <input type="text" name="author" id="" onChange={changeHandler}/>
                {(validState.author) ?  <p style={{color: "red" }} >{validState.author}</p> :null }
            </p>

            <button type="submit">Create</button>

            </form>
        </fieldset>
    )
}

export default Create;
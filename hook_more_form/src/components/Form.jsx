import React, {useState} from 'react'

const Form = (props) => {

    const[ formState, setFormState] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",

    })

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")

    const changeHandler = (e) => {
        const{name,value} = e.target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const submitHandler =(event) =>{ 
    // stops the from from making a request
    event.preventDefault()
        setFormState({
            "firstName": "",
            "lastName": "",
            "email": "",
            "password": "",            
        })
    }

    return (
<fieldset>
    <legend>Form</legend>

        <form onSubmit={submitHandler}>
            <p>
                First Name:
                <input onChange={changeHandler} type="text" name="firstName" id = "" value ={formState.firstName}/>
            </p>
            <p>
                Last Name:
                <input onChange={changeHandler} type="text" Last Name="lastName" id = "" value ={formState.lastName} />
            </p>  
            <p>
                Email:
                <input onChange={changeHandler} type="text" Last Name="email" id = "" value ={formState.email} />
            </p>
            <p>
                Password:
                <input onChange={changeHandler} type="text" Last Name="password" id = "" value ={formState.password} />
            </p>
            <button>Submit</button>
            
        </form>

</fieldset>
    )
}

export default Form

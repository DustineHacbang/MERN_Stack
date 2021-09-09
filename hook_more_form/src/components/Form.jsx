import React, {useState} from 'react'

const Form = (props) => {

    const[ formState, setFormState] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "confirmPassword": "",

    })

    const[ validState, setValidState] = useState({
        "firstName": false,
        "lastName": false,
        "email": false,
        "password": false,
        "confirmPassword": false,
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

    const submitHandler = (e) => {
        let firstName = false;
        let lastName = false;
        let email = false;
        let password = false;
        let confirmPassword = false; 
    // stops the from from making a request
    e.preventDefault();
        setFormState({
            "firstName": "",
            "lastName": "",
            "email": "",
            "password": "",
            "confirmPassword": "",                
        })
        //first name Must not be empty
        if(formState.firstName.length == 0){
            firstName = true;
        }
        //last name Must not be empty
        if(formState.lastName.length > 0){
            lastName = true;
        }
        // Email Verification
        if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)){
        email = true;
        }

        // Password Length Verification
        if(formState.password.length < 5){
            password = true;
        }
        //Password Verification
        if(formState.password.length !=  formState.confirmPassword){
            confirmPassword = true;
        }
        setValidState({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })






    return (
<fieldset>
    <legend>Form</legend>

        <form onSubmit={submitHandler}>
            <p>
                First Name:
                <input onChange={changeHandler} type="text" name="firstName" id = "" value ={formState.firstName}/>
                { (validState.firstName) ? <p style ={{"color": "red"}}> You must include a first name</p>: null }
            </p>
            <p>
                Last Name:
                <input onChange={changeHandler} type="text" Last Name="lastName" id = "" value ={formState.lastName} />
                { (validState.lastName) ? <p style ={{"color": "red"}}> You must include a last name</p>: null }
            </p>  
            <p>
                Email:
                <input onChange={changeHandler} type="text" Last Name="email" id = "" value ={formState.email} />
                { (validState.email) ? <p style ={{"color": "red"}}> Email must be valid</p>: null }
            </p>
            <p>
                Password:
                <input onChange={changeHandler} type="text" Last Name="password" id = "" value ={formState.password} />
                { (validState.password) ? <p style ={{"color": "red"}}> Password must be 5 characters</p>: null }
            </p>
            <p>
                Confirm Password:
                <input onChange={changeHandler} type="text" Last Name="confirm_password" id = "" value ={formState.confirmPassword} />
                { (validState.confirmPassword) ? <p style ={{"color": "red"}}> Password and Confirm Password Must match</p>: null }
            </p>
            <button>Submit</button>
            
        </form>

</fieldset>
    )
}

export defualt Form

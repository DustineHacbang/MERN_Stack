//IMPORT REACT FROM OUR DEPENDENCIES
import React, {Component} from "react";

//Creating component
class Display extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            ageNum: this.props.age
        }
    }

    clickHandler = () =>{
        let age = this.state.ageNum
        this.setState({
            "ageNum": ++age,

        })
        
        // console.log(age.state.age)
    }
    render(){
        var {lastName,firstName,hairColor} = this.props
        
        return(
            <div> 
            <h1>Name: {lastName}, {firstName}</h1>
            <h2>Age: {this.state.ageNum}</h2>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick = {this.clickHandler} >Birthday Button For {firstName} {lastName}</button>
            </div>
            
        )
    }
}

// Export Our Component
export default Display;
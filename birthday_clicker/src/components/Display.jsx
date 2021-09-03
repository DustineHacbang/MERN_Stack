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
        
        
        return(
            <div> 
            <h1>Name: {this.props.lastName}, {this.props.firstName}</h1>
            <h2>Age: {this.state.ageNum}</h2>
            <h3>Hair Color: {this.props.hairColor}</h3>
            <button onClick = {this.clickHandler} >Birthday Button For {this.props.firstName} {this.props.lastName}</button>
            </div>
            
        )
    }
}

// Export Our Component
export default Display;
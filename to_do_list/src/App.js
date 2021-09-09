import React,{useState} from "react";
import './App.css';

function App() {
  
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit= (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo])
  };

  return (
    <div style={{textAlign:"center"}}>
      <form 
      onSubmit ={(event) =>{
          handleNewTodoSubmit =(event);
      }}>

        <input 
        onChange ={(event) =>{
            setNewTodo(event.target.value);
        }} 
        type ="text"
        value={newTodo}
        />


        <div>
          <button>Submit</button>
        </div>
      
      </form>

        {
          todos.map((todo, i) =>{
            return (
            <div key = {i}>
              <span>{todo}</span>
            </div>
            );
        })}


    </div>
  );
}

export default App;

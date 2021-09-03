
import './App.css';
import Display from './components/Display';


function App() {


  return (
  <div>
  <Display lastName = {"Doe"}  firstName = {"Jane"} age={"45"} hairColor={"Black Hair"}/>  
  <Display lastName = {"Smith"}  firstName = {"John"} age={"88"} hairColor={"Brown"}/> 
  <Display lastName = {"Fillmore"}  firstName = {"Millard"} age={"50"} hairColor={"Brown"}/> 
  <Display lastName = {"Smith"}  firstName = {"Maria"} age={"62"} hairColor={"Brown"}/> 
  </div>
  );
}

export default App;

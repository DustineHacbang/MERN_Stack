import axios from "axios"


function App() {

  axios.get("http://localhost:8000/api/books/test")
  .then(res => console.log(res))
  .catch(err => console.log(err))

  return (
  <div>
    <h1>hellow world</h1>
  </div>
  );
}

export default App;

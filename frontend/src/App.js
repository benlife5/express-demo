import './App.css';
import axios from "axios"

import {useState, useEffect} from "react"

function App() {
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/demo/info?myParam=10")
    .then((res) => res.text())
    .then((text) => setInfo(text))
    .catch((err) => console.log(err))
  }, [])

  const post = () => {
    axios.post("http://localhost:8000/demo/post", {
      field1: "test"
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }


  return (
    <div className="App">
      <p>{info}</p>
      <input type="submit" value="Post" onClick={() => post()} />
    </div>
  );
}

export default App;

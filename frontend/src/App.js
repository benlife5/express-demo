import './App.css';
import axios from "axios"

import {useState, useEffect} from "react"

function App() {
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/demo/info?myParam=10")
    .then((res) => res.json())
    .then((text) => setInfo(text.result))
    .catch((err) => console.log(err))
  }, [])

  const post = () => {
    axios.post("http://localhost:8000/demo/post", {
      field1: "test"
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }

  console.log(info)

  return (
    <div className="App">
      {info && info.map((item)=> <p>{item.responseText}</p>)}
      {/* Each document in my database had a responseText field (i.e. responseText is just a variable name I choose) */}
      <input type="submit" value="Post" onClick={() => post()} />
    </div>
  );
}

export default App;

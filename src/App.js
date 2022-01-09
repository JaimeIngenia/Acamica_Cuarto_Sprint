import { useEffect } from "react";
import { getUsers } from "./getData";


function App() {
  useEffect(()=>{
    getUsers()
    .then((data) => {
      console.log(data);

    })
    .catch((error) => console.log("error"));
  },[])
  return (
    <div className="App">
      Hola Mundo
    </div>
  );
}

export default App;

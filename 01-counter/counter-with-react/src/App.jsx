import { useState } from "react";
import "./App.css";

function App(){
  let [count, setCount] = useState(0);

  const addToCount = () => {
    if (count < 10){
      setCount(count + 1);
    }
  }

  const subFromCount = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }


  return(
    <div>
      <h4>The Current Count Is...</h4>
      <h1>{count}</h1>
      <button onClick={addToCount}>+</button>
      <button onClick={subFromCount}>-</button>
    </div>
  );

  }
export default App;
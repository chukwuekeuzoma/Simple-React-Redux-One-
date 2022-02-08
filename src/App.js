import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./Actions"



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return(
     <div>
       <h1>A Simple Redux Project With React</h1>
       <h2>Counter {counter}</h2>
       <button onClick={() => dispatch(increment(5))}>+</button>
       <button onClick={() => dispatch(decrement())}>-</button>
       {isLogged?<h3>Valuable Information I shouldn't see</h3>: ""}
    </div> 
  )
}

export default App;

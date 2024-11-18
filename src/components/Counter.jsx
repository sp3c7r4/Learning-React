import { useReducer } from "react"
import reducer from "./counterReducer"

export default function Counter() {
  const initialData = {count: 0}
  const [state, dispatch] = useReducer(reducer, initialData)
  return (
    <div>
       <h1>Count: {state.count}</h1>
       <button onClick={() => dispatch({type: 'increment'})}>Increase</button>
       <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>
       <button onClick={() => dispatch({type: 'incrementBy', value: 4})}>Increase By 4</button>
    </div>
  )
}

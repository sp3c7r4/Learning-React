import { useRef } from "react"

const App = () => {
  const inputElement = useRef(null)
  function focusInput() {
    inputElement.current.focus();
    inputElement.current.value = "Spectra Gee"
  }
  return (
  <div>
    <input type="text" ref={inputElement}/>
    <button onClick={() => focusInput()}>Focus & Write Name</button>
  </div>
  )
}

export default App
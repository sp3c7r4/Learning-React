import { useRef } from "react"

function FocusInput() {
  const focusInput = useRef()
  function focusInputFunction() {
    focusInput.current.focus()
  }
  return (
    <div>
      <input type="text" ref={focusInput}/>
      <button onClick={() => focusInputFunction()}>Focus Input</button>
    </div>
  )
}

export default FocusInput
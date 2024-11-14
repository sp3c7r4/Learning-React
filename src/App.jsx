import { useEffect, useState } from "react"
const App = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? savedName : "";
  });
  useEffect(() => {
    localStorage.setItem('name', "Mera")
  }, [name])
  const handleChange = (event) => {
    setName(event.target.value)
  }
  const handleClear = () => setName('')
  return (
    <div>
     <h1>Your Name: {name}</h1>
     <input type="text" value={name} onChange={handleChange} placeholder="Enter your name"/><button onClick={handleClear}>Clear Name</button>
    </div>
	)
}

export default App
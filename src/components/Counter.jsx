import { useState } from "react"

export default function Counter() {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [arrayObject, setArrayObject] = useState([])
  const addItems = () => {
    const newItem = {
      name: name,
      quantity: parseInt(quantity)
    }
    setArrayObject([...arrayObject, newItem])
  }
  
  return (
    <div>
        <input type="text" placeholder="Name" onChange={(e) => setName(() => e.target.value)} />
        <input type="text" placeholder="Quantity" onChange={(e) => setQuantity(() => e.target.value)} />
        <button onClick={addItems}>Add new item</button>
      <ul>
        {arrayObject.map((items, index) => (
          <li key={index}>Name: {items?.name}, Quantity: {items?.quantity}</li>
        ))}
      </ul>
    </div>
  )
}

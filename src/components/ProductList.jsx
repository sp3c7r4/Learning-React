export default function ProductList() {
  const products = [
    {id: 1, name: "Phone", price: "$699"},
    {id: 2, name: "Laptop", price: "$999"},
    {id: 3, name: "HeadPhones", price: "$399"},
  ]
  return (
    <div>
      {products.map(({id, name, price}) => (
        <ul key={id}>
          <li>{name}</li>
          <li>{price}</li>
        </ul>
      ))}
    </div>
  )
}

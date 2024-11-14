export default function ProductInfo() {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock"
  }
  return (
    <div>
      <p>Product name: {product.name}</p>
      <p>Product price: {product.price}</p>
      <p>Product availability: {product.availability}</p>
    </div>
  )
}

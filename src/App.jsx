import { useState, useEffect } from "react"
const App = () => {
  /* Store data */
  const [data, setData] = useState([])
  /* Fetching Data */
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      if (data && data.length) setData(data);
    }
    getData()
  }, [])
  return (
    <div>
      <ul>
        {data.map((item) => (
          <section key={item.id}>
            <li>Title: {item.title} </li>
            <li>Body: {item.body} </li>
          </section>
        ))}
      </ul>
    </div>
	)
}

export default App
import { useEffect, useState } from 'react'

function Timer() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])

  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  )
}

export default Timer
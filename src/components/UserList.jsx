export default function UserList() {
  const users = [
    {id: 1, name: "Spectra", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 12},
  ]
  return (
    <div>
      {users.map(({id, name, age}) => (
        <ul key={id}>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      ))}
    </div>
  )
}

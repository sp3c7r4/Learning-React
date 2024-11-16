import { useContext } from "react"
import { User } from "./UserContext"
function UserProfile() {
  const user = useContext(User)
  return (
    <h1>Hello {user}</h1>
  )
}

export default UserProfile
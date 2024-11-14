import { FaShoppingCart } from "react-icons/fa";
export default function UserStatus( {loggedIn, isAdmin} ) {
  return (
    <div>
      {loggedIn && <h1>Welcome {isAdmin ? "Admin" : "User"}</h1>}
      <FaShoppingCart/>
    </div>
  )
}

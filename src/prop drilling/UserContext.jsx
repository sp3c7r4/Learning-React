import { createContext } from 'react'
import UserProfile from './UserProfile'

export const User = createContext()
function UserContext() {
  const user = 'Spectra'
  return (
    <User.Provider value={user}>
      <UserProfile/>
    </User.Provider>
  )
}

export default UserContext
import {useId} from 'react'

function UniqueID() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`}/><br />
      <label htmlFor={`${id}-password`}>Email</label>
      <input type="email" id={`${id}-password`}/><br />
    </div>
  )
}

export default UniqueID
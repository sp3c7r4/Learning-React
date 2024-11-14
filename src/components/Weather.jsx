const TemperatureCheck = ({input}) => {
  if (input < 15) return <h1>its cold outside</h1>
  else if (input >= 15 && input <= 25) return <h1>{"It's nice outside"}</h1>
  else return <h1>{"It's hot outside"}</h1>
}

export default function Weather({temperature}) {
  return (
    <div>
     <TemperatureCheck input={temperature}/>
    </div>
  )
}

export default function Greeting({timeOfDay}) {
  return (
    <div>
      {timeOfDay === "morning" ? `Good ${timeOfDay}` : `Good Afternoon`}
    </div>
  )
}

import React from 'react'

function Greetings({name,marks,roll_number}) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{marks}</h2>
      <h2>{roll_number}</h2>
    </div>
  )
}

export default Greetings

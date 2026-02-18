import React from 'react'

const Car = (car) => {

    const {make, model, year, price} = car;

  return (
    <div>
      <ul>
        <h3>{make}</h3>
        <li>{model}</li>
        <li>{year}</li>
        <li>{price}</li>
      </ul>
    </div>
  )
}

export default Car

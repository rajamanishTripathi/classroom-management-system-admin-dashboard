import React from 'react'
import Car from './components/Car'
import { useState } from 'react'
import { useEffect } from 'react';

const App = ({car}) => {
   const [cars , setCars] = useState([]);

   const getCall =  async () => {
    try{
    const data = await fetch('http://localhost:3000/api/v1/cars');
    const info = await data.json();
    setCars(info)
    console.log(info);
    }
    catch (err) {
      console.error("Auth Error:", err);
    }
  }

  useEffect(() => {
    getCall();
  },[]);

  
  return (
    <>
    <h1>Car Data</h1>
    <div>
      {cars.map((car) => <Car key={car.id} {...car}/>)}
    </div>
    </>
  )
}

export default App;

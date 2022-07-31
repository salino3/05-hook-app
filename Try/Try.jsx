import React, { useState } from 'react';

const Try = () => {
    const [first, setFirst] = useState('Hola');

    const handlechange = (event) => {
     setFirst( event.target.value)
    }
  return (
    <>
 <input
 value={first} 
    onChange={handlechange}
 />

    </>
  )
}

export default Try
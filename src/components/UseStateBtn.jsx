import React from 'react'
import "./UseStateBtn.css";
import { useState } from 'react';

const UseStateBtn = () => {

    let [count, setCount] = useState(0);

  return (
    <div className='button-container'>
        <button className='btn' onClick={ ()=>setCount( count =  count - 2 ) }>-</button>
        <span className='result'>{ count }</span>
        <button className='btn' onClick={ ()=>setCount( ++count ) }>+</button>

        { console.log(count) }
    </div>
  )
}

export default UseStateBtn
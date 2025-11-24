"use client"
import React from 'react'
import { incrementCount,decrementCount } from '../reduxToolkit/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counterReducer.value)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(incrementCount())}>increment</button>
        <button onClick={()=>dispatch(decrementCount())}>decrement</button>
    </div>
  )
}

export default Counter
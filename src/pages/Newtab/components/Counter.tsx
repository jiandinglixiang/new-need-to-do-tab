import { useCounterStore } from '../store/useCounterStore'
import React from 'react'

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={decrement}>-</button>
      <span>Count is {count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
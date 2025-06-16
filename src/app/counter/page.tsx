'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/stores'
import { increment, decrement } from '@/stores/slices/counterSlice'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>เพิ่ม</button>
      <button onClick={() => dispatch(decrement())}>ลด</button>
    </div>
  )
}

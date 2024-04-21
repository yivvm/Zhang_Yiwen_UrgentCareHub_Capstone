import React from 'react'
import { useSelector } from 'react-redux'

import Visit from './Visit'

export default function Visits() {
  const visits = useSelector(state => state.visits)

  console.log(visits)

  return (
    <div>
      <h1>visitssssssssss</h1>
      <Visit />
      <Visit />
      <Visit />
    </div>
  )
}

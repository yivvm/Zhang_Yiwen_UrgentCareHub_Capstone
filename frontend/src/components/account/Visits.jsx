import React from 'react'
import { useSelector } from 'react-redux'

import Visit from './Visit'

export default function Visits({ setCurrentId}) {
  const visits = useSelector(state => state.visits)

  console.log(visits)

  return (
    !visits.length ? (<h1>no upcoming visits</h1>) : (
       <div className='cards-visits'>
         {/* <h1>Visits</h1> */}
         {visits.map((visit) => (
           <Visit key={visit._id} visit={visit} />
         ))}
       </div>
     )
    )
}

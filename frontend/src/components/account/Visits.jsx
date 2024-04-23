import React from 'react'
import { useSelector } from 'react-redux'

import Visit from './Visit'

export default function Visits({ setCurrentId }) {
  const visits = useSelector(state => state.visits).visits

  console.log(visits)
  console.log(visits.length)

  return (
    !visits.length ? (<h3>No upcoming visits.</h3>) : (
       <div className='cards-visits'>
         {/* <h1>Visits</h1> */}
         {visits.map((visit) => (
           <Visit key={visit._id} visit={visit} setCurrentId={setCurrentId}/>
         ))}
       </div>
     )

    // <div className="cards-visits">
    //   {visits.map((visit) => (
    //     <Visit key={visit._id} visit={visit} setCurrentId={setCurrentId} />
    //   ))}
    // </div>
    )
}

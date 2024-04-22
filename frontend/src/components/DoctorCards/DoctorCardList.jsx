import React from 'react'
import DoctorCard from './DoctorCard'

export default function DoctorCardList({ doctorcards }) {
  return (
    <div className='card-grid'>
      {doctorcards.map((doctorcard) => {
        return <DoctorCard doctorcard={doctorcard} key={doctorcard.id} />
      })}
    </div>
  )
}

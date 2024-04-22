import React from 'react'
import { useDispatch } from 'react-redux'

export default function Visit({ visit}) {
  const dispatch = useDispatch()

  return (
    <div className='card-visit'>
      <div>{visit.date}</div>
      <div>{visit.time}</div>
      <div>{visit.reason}</div>
      <div>{visit.firstName} {visit.lastName}</div>
      <div>{visit.dateOfBirth}</div>
      <div>{visit.gender}</div>
      <div>{visit.phone}</div>
      <div>{visit.email}</div>
      <div>
        <button className="button" onClick={() => dispatch({ type: 'UPDATE_VISIT', id: visit._id })}>
          Edit or reschedule 
        </button>
        <button className='button' onClick={() => dispatch({ type: 'DELETE_VISIT', id: visit._id })}>
          Cancel
        </button>
      </div>
    </div>
  )
}

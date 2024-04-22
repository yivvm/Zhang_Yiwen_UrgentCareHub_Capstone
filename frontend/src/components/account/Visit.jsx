import React from 'react'
import { useDispatch } from 'react-redux'
// import moment from 'moment'

import { deleteVisit } from '../../actions/visits.js'

export default function Visit({ visit, setCurrentId }) {
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
        <button className="button" onClick={() => setCurrentId(visit._id)}>
          Edit or reschedule 
        </button>
        <button className='button' onClick={() => dispatch(deleteVisit(visit._id))}>
          Cancel
        </button>
      </div>
    </div>
  )
}

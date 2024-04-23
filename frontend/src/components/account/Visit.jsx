import React from 'react'
import { useDispatch } from 'react-redux'
// import moment from 'moment'

import { fetchVisitDetails, setEditingVisitId, updateVisit, deleteVisit } from '../../actions/visits.js'

export default function Visit({ visit, setCurrentId }) {
  const dispatch = useDispatch()

  const handleEdit = () => {
    // Call setCurrentId with visit._id
    // setCurrentId(visit._id);
    // console.log(visit._id)

    dispatch(fetchVisitDetails(visit._id));
    dispatch(setEditingVisitId(visit._id)); // Set the ID of the visit being edited

  };

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
        <button className="button" onClick={handleEdit}>
          Edit or reschedule 
        </button>
        <button className='button' onClick={() => dispatch(deleteVisit(visit._id))}>
          Cancel
        </button>
      </div>
    </div>
  )
}

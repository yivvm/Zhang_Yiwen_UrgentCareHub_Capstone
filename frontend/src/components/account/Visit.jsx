import React from 'react'
import { useDispatch } from 'react-redux'
// import moment from 'moment'

import { fetchVisitDetails, setEditingVisitId, updateVisit, deleteVisit } from '../../actions/visits.js'
import './visit.css'

export default function Visit({ visit }) {
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(fetchVisitDetails(visit._id));
    dispatch(setEditingVisitId(visit._id)); // Set the ID of the visit being edited
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const optionsDay = { day: 'numeric' };
    const optionsMonth = { month: 'short' };
    const optionsYear = { year: 'numeric' };
    const day = Number(date.toLocaleDateString('en-US', optionsDay)) + 1;
    const month = date.toLocaleDateString('en-US', optionsMonth);
    const year = date.toLocaleDateString('en-US', optionsYear);
    return { day, month, year }
  }

  const formatTime = (timeStr) => {
    const options = { hour: 'numeric', minute: 'numeric' };
    const time = new Date(`2022-01-01T${timeStr}`); 
    return time.toLocaleTimeString('en-US', options);
  };

  return (
    <div className='card-visit'>
      <div className='visit-content'>
        <div className='visit-date-time'>
          <h2 className='day'>{formatDate(visit.date).month} {formatDate(visit.date).day}</h2>
          <h3 className='year'>{formatDate(visit.date).year}</h3>
          <h2 className='time'>{formatTime(visit.time)}</h2>
        </div>
        <div className='visit-info'>
          <div><strong>{visit.reason}</strong></div>
          <div>{<strong>{(visit.otherReason)}</strong> || ""}</div>
          <div className='name'>Name: {visit.firstName} {visit.lastName}</div>
          <div>DOB: {formatDate(visit.dateOfBirth).month} {formatDate(visit.dateOfBirth).day}, {formatDate(visit.dateOfBirth).year}</div>
          <div>Gender: {visit.gender}</div>
          <div>Phone: {visit.phone}</div>
          <div className='email'>Email: {visit.email}</div>
        </div>
      </div>
      
      
      <div className='visit-btn'>
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

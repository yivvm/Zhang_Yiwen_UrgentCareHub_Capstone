import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UserHeader from '../../components/account/UserHeader.jsx'

import { getVisits, setEditingVisitId } from '../../actions/visits.js'
import Visits from '../../components/account/Visits.jsx'
import EditVisitForm from '../../components/account/EditVisitForm.jsx';
import './account.css'

export default function Account() {
  const [upcomingVisits, setUpcomingVisits] = useState([]);
  const [pastVisits, setPastVisits] = useState([]);

  const visits = useSelector(state => state.visits.visits);
  const editingVisitId = useSelector((state) => state.visits.editingVisitId);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVisits())
  }, [dispatch])

  const handleEditCancel = () => {
    dispatch(setEditingVisitId(null)); // Reset editing visit ID
  };

  //#region FILTER VISITS BY DATE+TIME
  // Function to combine date and time into a single Date object
  const combineDateTime = (dateStr, timeStr) => {
    const [year, month, day] = dateStr.substring(0, 10).split('-').map(Number);
    const [hours, minutes] = timeStr.split(':').map(Number);

    return new Date(year, month - 1, day, hours, minutes);
  };

  // Function to filter visits
  const filterVisits = () => {
    const now = new Date(); // Current local time
    // console.log(now)

    const upcoming = visits.filter(visit => {
      console.log('time', combineDateTime(visit.date, visit.time))
      return combineDateTime(visit.date, visit.time) >= now
    })
    const past = visits.filter(visit => combineDateTime(visit.date, visit.time) < now)

    setUpcomingVisits(upcoming)
    setPastVisits(past)
    console.log('upcomingVisits: ', upcomingVisits.length)
    console.log('pastVisits: ', pastVisits.length)
  }

  useEffect(() => {
    filterVisits();
  }, [visits])
  //#endregion


  return (
    <div className='Account'>
      <UserHeader />

      <h1>Upcoming Visits</h1>
      <div>
        {editingVisitId ? (
          <EditVisitForm />
        ) : (
          <Visits visits={upcomingVisits} />
        )}
      </div>

      <h1>Past Visits</h1>
      <div>
        <Visits visits={pastVisits} />
      </div>
    </div>
  )
}

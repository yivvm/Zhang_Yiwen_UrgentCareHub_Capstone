import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getVisits, setEditingVisitId } from '../../actions/visits.js'
import Visits from '../../components/account/Visits'
import EditVisitForm from '../../components/account/EditVisitForm';
import './account.css'

export default function Account() {
  // const [currentId, setCurrentId] = useState(null)

  const visits = useSelector(state => state.visits.visits);
  const editingVisitId = useSelector((state) => state.visits.editingVisitId);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVisits())
  }, [dispatch])

  const handleEditCancel = () => {
    dispatch(setEditingVisitId(null)); // Reset editing visit ID
  };

  return (
    <div className='Account'>
      <h1>Upcoming Visits</h1>
      <div>
        {editingVisitId ? (
          <EditVisitForm />
        ) : (
          <Visits visits={visits} />
        )}
      </div>
      <h1>Past Visits</h1>
    </div>

    // <div className='Account'>
    //   <h1>Upcoming Visits</h1>
    //   <div>
    //     <Visits setCurrentId={setCurrentId}/>
    //   </div>
    //   <h1>Past Visits</h1>
    // </div>
  )
}

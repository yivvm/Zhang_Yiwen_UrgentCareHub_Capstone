import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVisits } from '../../actions/visits.js'

import Form from '../../components/schedule/Form'

export default function Schedule() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVisits())
  }, [dispatch])

  return (
    <div>
      <h1>Schedule Appointment Online</h1>
      <div>
        <img src={`../images/location.png`}/>
      </div>
      <div>
        <Form />
      </div>
    </div>
  )
}

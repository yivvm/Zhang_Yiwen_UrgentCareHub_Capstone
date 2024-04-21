import React from 'react'

import Form from '../../components/schedule/Form'

export default function Schedule() {
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

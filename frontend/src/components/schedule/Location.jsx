import React, { useState, useEffect } from 'react'

export default function Location() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000)
    
        return () => {
          clearInterval(timer)
        }
      })
    
      const formatCurrentTime = currentTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });

  return (
    <div className='location'>
        <h2>National Urgent Care Dry Tortugas</h2>
        <p><strong>Address:</strong> 1400 Whitehead St, Key West, FL 33040</p>
        <div className='image-container'>
            <img src={`../images/location.png`} alt="the map of National Urgent Care Dry Tortugas"/>
        </div>
        <br />

        <div>
            <p id="open"><strong>Hours of operation:</strong></p>
            <p>Monday to Friday: 8AM - 8PM EST</p>
            <p>Saturday & Sunday: 9AM - 6PM EST</p>
        </div>
        <br />
        <div>
            <p id="current-time">Current Local Time:</p>
            <p>{formatCurrentTime}</p>
        </div>
    </div>
  )
}

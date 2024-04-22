import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from'react-redux'

import { createVisit, updateVisit } from '../../actions/visits.js'

import axios from 'axios';

export default function Form({ currentId, setCurrentId }) {
    const [visitData, setVisitData] = useState({
        date: "",
        time: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        phone: "",
        email: "",
        reason: "",
        otherReason: "",
    })

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // console.log("New Visit Data in the Form:", visitData);

        // #region Regular Axios
        // const url = "http://localhost:5100/visits"
        // await axios.post(url, visitData)
        // #endregion

        // if (currentId === 0) {
        dispatch(createVisit(visitData));
        //   clear();
        // } else {
        //   dispatch(updateVisit(currentId, visitData));
        //   clear();
        // }
      };

    const clear = () => {
        // setCurrentId(0);
        // setVisitData({ date: "", time: "", firstName: "", lastName: "", dateOfBirth: "", gender: "", phone: "", email: "",reason: "", otherReason: "", });
      };

  return (
    <form className='schedule-form' action='/api/visits' method='POST' onSubmit={handleSubmit}>
        {/* middle section */}
        <div className='time-date'>
            <p>Please provide the date and time that the patient wants to schedule.</p>
            <div>
                <label htmlFor="scheduleddate">Schedule On</label>
                <input name="scheduleddate" type="date" placeholder="MM/DD/YYYY" required id="scheduleddate" value={visitData.date} onChange={(e) => setVisitData({ ...visitData, date: e.target.value})}/>
                <input type="time" name="time" id="time" required value={visitData.time} onChange={(e) => setVisitData({ ...visitData, time: e.target.value.toString()})}/>
            </div>
        </div>

        {/* right section */}
        <div className='info'>
            <p>Please provide some information about the patient.</p>
            <div>
                <label htmlFor="firstname">Legal First Name</label>
                <input name="firstname" type="text" placeholder="Legal First Name" required id="firstname" value={visitData.firstName} onChange={(e) => setVisitData({ ...visitData, firstName: e.target.value})}/>
            </div>
        
            <div>
                <label htmlFor="lastname">Legal Last Name</label>
                <input name="lastname" type="text" placeholder="Legal Last Name" required id="lastname" value={visitData.lastName} onChange={(e) => setVisitData({ ...visitData, lastName: e.target.value})}/>
            </div>
        
            <div>
                <label htmlFor="date of birth">Date of Birth</label>
                <input name="dateofbirth" type="date" placeholder="MM/DD/YYYY" required id="dateofbirth" value={visitData.dateOfBirth} onChange={(e) => setVisitData({ ...visitData, dateOfBirth: e.target.value})}/>
            </div>

            <div>
                <label htmlFor="legalsex">Legal Sex</label>
                <span style={{ fontSize: "10px", color: "grey" }}>  (Your legal sex is what is listed on your ID.)</span>
                <br />
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={visitData.gender === "female"}
                    onChange={() => setVisitData({ ...visitData, gender: "female" })}
                />
                <label htmlFor="female">Female</label>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={visitData.gender === "male"}
                    onChange={() => setVisitData({ ...visitData, gender: "male" })}
                />
                <label htmlFor="male">Male</label>
            </div>

            <div>
                <br />
                <label htmlFor="contact">How can we contact you for your visit?</label>
            </div>
            <div>
                <input name="phone" id="phone" type="tel" placeholder="Mobile Phone Number XXX-XXX-XXXX" required pattern="^\(\d{3}\)\s\d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$" value={visitData.phone} onChange={(e) => setVisitData({ ...visitData, phone: e.target.value})}/>
            </div>
            <div>
                <input name="email" id="email" type="email" placeholder="Email" required value={visitData.email} onChange={(e) => setVisitData({ ...visitData, email: e.target.value})}/>
            </div>

            <div>
                <br />
                <label htmlFor="reason">Help us prepare for your arrival</label> 
                <select name="reason" id="reason" required value={visitData.reason} onChange={(e) => setVisitData({ ...visitData, reason: e.target.value})}>
                    <option value="">Reason for visit</option>
                    <option value="pediatrician">Pediatrician</option>
                    <option value="illness">Illness</option>
                    <option value="injury">Injury</option>
                    <option value="wound">Wound/Laceration</option>
                    <option value="testing">Testing onsite</option>
                    <option value="DOT physicals">DOT physicals</option>
                    <option value="others">Others</option>
                </select>
            </div>

            <div>
                <label htmlFor="other">Other Reasons</label>
                <input type="text" name="other" placeholder="Please let us know ..." value={visitData.otherReason} onChange={(e) => setVisitData({ ...visitData, otherReason: e.target.value})}/>
            </div>

            <div className="flex-row">
                <br />
                <input name="terms" type="checkbox" required/>
                <label htmlFor="terms" style={{ fontSize: "15px" }}>I agree to the&nbsp;<a href="#">Terms of Use</a>.</label>
                <br />
                <button className="button" id="submit" >Submit</button>
                <button className="button" id="submit" onClick={clear}>Clear</button>
            </div>
            <br />
        </div>
    </form>
  )
}

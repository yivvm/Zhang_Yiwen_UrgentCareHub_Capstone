import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { updateVisit } from '../../actions/visits.js';
import { VISIT_UPDATED } from '../../constants/actionTypes.js';

export default function EditVisitForm() {
  const editingVisitId = useSelector((state) => state.visits.editingVisitId);
  const visit = useSelector((state) => state.visits.visitDetails);
  const dispatch = useDispatch();

  console.log('visit in EditVisitForm', visit)

  const [formData, setFormData] = useState({
    // date: visit.date,
    // time: visit.time,
    // firstName: visit.firstName,
    // lastName: visit.lastName,
    // dateOfBirth: visit.dateOfBirth,
    // gender: visit.gender,
    // phone: visit.phone,
    // email: visit.email,
    // reason: visit.reason,
    // otherReason: visit.otherReason,
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
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (visit) {
        setFormData({
          date: visit.date || "",
          time: visit.time || "",
          firstName: visit.firstName || "",
          lastName: visit.lastName || "",
          dateOfBirth: visit.dateOfBirth || "",
          gender: visit.gender || "",
          phone: visit.phone || "",
          email: visit.email || "",
          reason: visit.reason || "",
          otherReason: visit.otherReason || "",
        });

        console.log('after if visit', visit)
    }
  }, [visit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateVisit(editingVisitId, formData));
    // console.log('editingViditId', editingVisitId)  // logged
    // console.log('formData', formData)  // logged

    // After updating, dispatch VISIT_UPDATED and handle navigation
    dispatch({ type: VISIT_UPDATED });

    // After updating, refresh the page to see all visits. 
    // Since it's already in Account page (as /account), no need to navigate it to the page again
    navigate(0)
  };

  return (
    <div>
      <h2>Edit Visit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        /> 
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="otherReason"
          value={formData.otherReason}
          onChange={handleInputChange}
        />
        <button type="submit" className='edit-btn'>Save Changes</button>
      </form>
    </div>
  );
}

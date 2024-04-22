import ScheduledVisits from "../models/scheduledVisits.js";
import mongoose from "mongoose";

export const getVisits = async (req, res) => {
  try {
    const scheduledVisits = await ScheduledVisits.find();
    console.log(scheduledVisits);

    res.status(200).json(scheduledVisits);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createVisit = async (req, res) => {
  const {
    date,
    time,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    phone,
    email,
    reason,
    otherReason,
  } = req.body;

  console.log("Request Body:", req.body); // consoled

  try {
    const dateOfBirthDate = new Date(dateOfBirth);

    const newVisit = new ScheduledVisits({
      date: new Date(date),
      time,
      firstName,
      lastName,
      dateOfBirth: dateOfBirthDate,
      gender,
      phone,
      email,
      reason,
      otherReason,
    });

    console.log("New Visit:", newVisit); // consoled

    const savedVisit = await newVisit.save();

    console.log("Saved Visit:", savedVisit); // nothing

    res.status(201).json(savedVisit);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

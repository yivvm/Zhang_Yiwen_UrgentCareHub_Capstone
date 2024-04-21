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

  const newVisit = new ScheduledVisits({
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
  });

  try {
    await newVisit.save();

    res.status(201).json(newVisit);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

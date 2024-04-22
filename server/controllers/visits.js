import ScheduledVisits from "../models/scheduledVisits.js";
import mongoose from "mongoose";

export const getVisits = async (req, res) => {
  try {
    const scheduledVisits = await ScheduledVisits.find();
    // console.log(scheduledVisits);

    res.status(200).json(scheduledVisits);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getVisit = async (req, res) => {
  const { id } = req.params;

  try {
    const visit = await ScheduledVisits.findById(id);

    if (!visit) {
      return res.status(404).json({ message: "Visit not found" });
    }

    // console.log(visit);

    res.status(200).json(visit);
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

  // console.log("Request Body:", req.body); // logged

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

    // console.log("New Visit:", newVisit); // logged

    const savedVisit = await newVisit.save();

    // console.log("Saved Visit:", savedVisit); // logged

    res.status(201).json(savedVisit);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateVisit = async (req, res) => {
  const { id } = req.params;
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

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No visit with id: ${id}`);

  const updatedVisit = {
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
    _id: id,
  };

  await ScheduledVisits.findByIdAndUpdate(id, updatedVisit, { new: true });

  res.json(updatedVisit);
};

export const deleteVisit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No visit with id: ${id}`);

  try {
    const deletedVisit = await ScheduledVisits.findOneAndDelete({ _id: id });
    if (!deletedVisit) {
      return res.status(404).json({ message: "Visit not found." });
    }
    res.json({ message: "Visit canceled successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while canceling the visit." });
  }
};

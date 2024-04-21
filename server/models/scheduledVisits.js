import mongoose from "mongoose";
import validator from "validator";

const visitSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  time: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(0?[1-9]|1[0-2]):([0-5]\d) ?([APap][mM])$/.test(value);
      },
      message: (props) =>
        `${props.value} is not a valid time format. Use HH:MM AM/PM.`,
    },
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        // Use 'email' validator provided by Mongoose
        return validator.isEmail(value);
      },
      message: "Please enter a valid email address.",
    },
  },
  reason: {
    type: String,
    required: true,
  },
  otherReason: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ScheduledVisits = mongoose.model("ScheduledVisits", visitSchema);

export default ScheduledVisits;

import express from "express";
import {
  getVisits,
  getVisit,
  createVisit,
  updateVisit,
  deleteVisit,
} from "../controllers/visits.js";

const router = express.Router();

// localhost:PORT/visits
// router.get("/", (req, res) => {
//   res.send("received a GET request for the user");
// }); // for testing

router.get("/", getVisits);
router.post("/", createVisit);
router.get("/:id", getVisit);
router.patch("/:id", updateVisit);
router.delete("/:id", deleteVisit);

export default router;

// Load env variables
import dotenv from "dotenv";
if (process.env.NODE_ENV != "production") {
  dotenv.config();
}

// import dependencies
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import connectToDb from "./config/connectToDb.js";
// const cookieParser = require("cookie-parser");

import visitRoutes from "./routes/visits.js";

// create express app
const app = express();

// Connect to database
connectToDb();

// Configure express app
app.use(express.json());
app.use(express.json({ limit: "30mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/visits", visitRoutes);

// Routing
app.get("/", (req, res) => {
  res.json({ hello: "Hello!" });
});

// app.post("/signup", usersController.signup);
// app.post("/login", usersController.login);
// app.get("/logout", usersController.logout);
// app.get("/check-auth", requireAuth, usersController.checkAuth);

// app.get("/notes", notesController.fetchNotes);
// app.get("/notes/:id", notesController.fetchNote);
// app.post("/notes", notesController.createNote);
// app.put("/notes/:id", notesController.updateNote);
// app.delete("/notes/:id", notesController.deleteNote);

// Start our server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

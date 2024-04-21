// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDb");

import postRoutes from "./routes/posts.js";

// const notesController = require("./controllers/notesController");
// const usersController = require("./controllers/usersController");
// const requireAuth = require("./middleware/requireAuth");

// create express app
const app = express();

// Configure express app
app.use(express.json());
app.use(express.json({ limit: "30mb" }));
// app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Connect to database
connectToDb();

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

// Add requireAuth after login works: https://www.youtube.com/watch?v=jcckC--ibmM&list=PL-LRDpVN2fZA-1igOQ6PDcqfBjS-vaC7w&index=7

// Start our server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

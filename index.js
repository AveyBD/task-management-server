const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./Routes/ToDoRoute");
// middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
// mongoose connection
mongoose
  .connect(process.env.MONGODB_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("Listening to port 5000");
});

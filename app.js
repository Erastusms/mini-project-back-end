require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes");
app.use(routes)

app.listen(PORT, () => {
  console.log("App listening to port", PORT);
});

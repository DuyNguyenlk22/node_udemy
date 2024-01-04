require("dotenv").config();
const express = require("express"); // commonjs
// import express from "express" // es modules

const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostName = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
//config template engine
configViewEngine(app);

//Khai báo route
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

(async () => {
  try {
    //test connection
    await connection();
    app.listen(port, hostName, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("😐 ~ error:👉", error);
  }
})();

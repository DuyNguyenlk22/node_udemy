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
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
//config template engine
configViewEngine(app);
app.use(fileUpload());

//Khai báo route
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

(async () => {
  try {
    //? using mongoose
    //test connection
    await connection();

    //? using mongodb driver
    // Connection URL
    // const url = process.env.DB_HOST_WITH_DRIVER;
    // const client = new MongoClient(url);
    // // Database Name
    // const dbName = process.env.DB_NAME;

    // await client.connect();
    // console.log("Connected successfully to server");
    // const db = client.db(dbName);
    // const collection = db.collection("customers");

    // collection.insertOne({
    //   name: "DuyNguyen",
    //   address: [
    //     {
    //       province: "Sài Gòn",
    //       country: {
    //         code: 10000,
    //         name: "Vietnam",
    //       },
    //     },
    //     {
    //       province: "HN",
    //       country: {
    //         code: 10000,
    //         name: "Vietnam",
    //       },
    //     },
    //   ],
    // });
    // let a = await collection.findOne({ name: "DuyNguyen" });
    // console.log("😐 ~ a:👉", a);

    app.listen(port, hostName, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("😐 ~ error:👉", error);
  }
})();

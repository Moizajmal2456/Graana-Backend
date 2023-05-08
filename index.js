import express, { json } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import { AuthRoutes } from "./Routes/index.js";
const app = express();
dotenv.config();
app.use(express.json()); // to parse body in requests
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/Graana-Backend");

mongoose.connection.on("connected" , () => {
  console.log("Connection Build Successfully");
})

mongoose.connection.on("error" , () => {
  console.log("Something went wrong");
})

app.get("/properties" ,  (req, res) => {
res.send(JSON.stringify(propertiesList))
})

// app.get("/properties/:id" , (req , res) => {
//     const ID = req.params.id;
//    const property =  propertiesList.find((p) => p.id == ID );
//    if(!property){
//     return("Property not found");
//    }
//    res.status(200 , "ok").send(JSON.stringify(property));
// })

// app.delete("/properties/:id" , (req,res) => {
//   const ID = Number(req.params.id);
//   const property = propertiesList.find((p) => p.id === ID);
//   const index = propertiesList.indexOf(property);
//   propertiesList.splice(index , 1);
//   res.status(200).send(JSON.stringify("Property delete successfully"));
// })

app.use("/", AuthRoutes);

app.listen(4000);
console.log("Server listening on port: 4000");
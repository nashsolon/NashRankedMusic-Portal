import express from "express"
import cors from "cors"
import campaigns from "./api/campaigns.route.js"
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1/campaigns", campaigns
    // , function(req, res, next){
    // res.header("Access-Control-Allow-Origin", "http://ec2-3-15-26-27.us-east-2.compute.amazonaws.com:3000"); // update to match the domain you will make the request from
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header({"Access-Control-Allow-Origin": "*"})
    // next();
// }
)
// Message if go to route that DNE
app.use("*", (req, res) => res.status(404).json({error: "not found"}))
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://ec2-3-15-26-27.us-east-2.compute.amazonaws.com:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  


// Export app as module
export default app 



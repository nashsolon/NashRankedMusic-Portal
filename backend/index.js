// connect DB and start server
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import CampaignsDAO from "./dao/campaignsDAO.js"
import InfluencersDAO from "./dao/influencersDAO.js"
import UsersDAO from "./dao/usersDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

// app.use(function(req, res, next){
//     res.header("Access-Control-Allow-Origin", "http://ec2-3-15-26-27.us-east-2.compute.amazonaws.com:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header({"Access-Control-Allow-Origin": "*"})
//     next();
// });
MongoClient.connect(
    process.env.CAMPINFLUENCERS_DB_URI,
    {
        // hm ppl can connect at a tume
        poolSize: 50,
        // after 2500 ms -> request = timeout
        wtimeout: 2500,
        useNewUrlParse: true }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
// after connect to DB ->
.then(async (client, conn) => {
    await UsersDAO.injectDB(client)
    await CampaignsDAO.injectDB(client)
    await InfluencersDAO.injectDB(client)
    // start web server
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})
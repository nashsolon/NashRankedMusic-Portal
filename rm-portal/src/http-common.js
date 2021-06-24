import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:5000/api/v1/campaigns",
    baseURL: "http://ec2-3-15-26-27.us-east-2.compute.amazonaws.com:5000/api/v1/campaigns",
    // baseURL: "http://169.254.169.254/latest/meta-data/",
    // baseURL: "http://172.31.12.224/:5000/api/v1/campaigns",
    headers: {
        "Content-type": "application/json"
    }
});
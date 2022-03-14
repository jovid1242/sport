import axios from "axios";

const http = axios.create({
  baseURL: "https://tojbackend.web.bobo.tj/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
//

export default http;

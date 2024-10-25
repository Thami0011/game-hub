import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ad2b1349914442d0a2032e9d60baff35",
  },
});

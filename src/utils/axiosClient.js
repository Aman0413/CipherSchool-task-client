import axios from "axios";

let baseURL = "http://localhost:4000";
if (process.env.NODE === "production") {
  baseURL = process.env.REACT_APP_BASE_URL;
}
export const axiosClient = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

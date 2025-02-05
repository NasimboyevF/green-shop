import axios from "axios";
import { API_BAСE_URL } from "./env.config";




export const apiClient = axios.create({
  baseURL: API_BAСE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/",
})
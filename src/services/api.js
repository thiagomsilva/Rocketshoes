import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://rocketshoes.vercel.app"
        : "http://localhost:3333";

const api = axios.create({
    baseURL,
});

export default api;

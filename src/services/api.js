import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://my-json-server.typicode.com/thiagomsilva/server"
        : "http://localhost:3333";

const api = axios.create({
    baseURL,
});

export default api;

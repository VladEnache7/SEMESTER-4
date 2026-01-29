import axios from "axios";

// const FastAPI = axios;
const FastAPI = axios.create({
    baseURL: "http://localhost:8000/",
});

export default FastAPI;

function setAuthToken(token) {
    if (token) {
        // Apply authorization token to every request if logged in
        FastAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log(
            "Authorization Header: ",
            FastAPI.defaults.headers.common["Authorization"],
        );
    } else {
        // Delete auth header
        delete FastAPI.defaults.headers.common["Authorization"];
    }
}

export { setAuthToken };

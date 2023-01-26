import axios from "axios";

export default axios.create({
    baseURL: "https://legacy-todo-list-back.vercel.app"
});
import axios from "axios";

export const useAxios = axios.create({
    headers: {
        "Content-Type": "application/josn"
    }
})
import axios from "axios";

export const getDefects = () => {
    return axios
        .get("https://localhost:7117/Defects")
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

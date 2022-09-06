import axios from "axios";

export const getColores = () => {
  return axios
    .get("https://localhost:7117/Home")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

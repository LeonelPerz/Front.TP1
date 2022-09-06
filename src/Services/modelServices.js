import axios from "axios";

export const GetModels = async () => {
    try {
        let res = await axios.get("https://localhost:7117/model/models");
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

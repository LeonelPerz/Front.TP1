import axios from "axios";

export const GetModels = async () => {
    try {
        let res = await axios.get("https://localhost:7117/model/models");
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

// export const SaveModel = async (modelData) => {
//     try {
//         await axios.post("https://localhost:7117/model/models", {
//             sku: modelData.sku,
//             descripcion: modelData.descripcion,
//             limiteInferiorReproceso: modelData.limiteInferiorReproceso,
//             limiteSuperiorReproceso: modelData.limiteSuperiorReproceso,
//             limiteInferiorObservado: modelData.limiteInferiorObservado,
//             limiteSuperiorObservado: modelData.limiteSuperiorObservado
//         });
//     } catch (e) {
//         console.log(e);
//     }
// };
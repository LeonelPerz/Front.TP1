import axios from "axios";

const GetModels = async () => {
    try {
        let res = await axios.get("https://localhost:7117/model/models");
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

const CreateModel = async (props) => {
    try {
        // const model = {
        //     sku: props.sku,
        //     descripcion: props.descripcion,
        //     limiteInferiorReproceso: props.limiteInferiorReproceso,
        //     limiteInferiorObservado: props.limiteInferiorObservado,
        //     limiteSuperiorReproceso: props.limiteSuperiorReproceso,
        //     limiteSuperiorObservado: props.limiteSuperiorObservado,
        //     ordenesDePrduccion: props.ordenesDePrduccion
        // }

        const response = await axios({
            method: 'POST',
            url: 'https://localhost:7117/Model/CreateModel',
            data: {
                sku: props.sku,
                descripcion: props.descripcion,
                limiteInferiorReproceso: props.limiteInferiorReproceso,
                limiteInferiorObservado: props.limiteInferiorObservado,
                limiteSuperiorReproceso: props.limiteSuperiorReproceso,
                limiteSuperiorObservado: props.limiteSuperiorObservado,
                ordenesDePrduccion: props.ordenesDePrduccion
            }
        })

        // await axios.post("https://localhost:7117/Model/CreateModel", model).then(function (response) {
        //     console.log(response);
        // }).catch(function (error) {
        //     console.log(error);
        // })
    } catch (e) {
        console.log(e);
    }
};

export { GetModels, CreateModel };
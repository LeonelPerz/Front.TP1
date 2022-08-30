import React, { useState } from 'react';
import ModelForm from './ModelForm';
import ModelTable from './ModelTable';

const initialDb = [
    {
        sku: 1,
        descripcion: "ElPepe1",
        limiteInferiorReproceso: 523,
        limiteSuperiorReproceso: 1430,
        limiteInferiorObservado: 123,
        limiteSuperiorObservado: 7,
        id: 1,
    },
    {
        sku: 2,
        descripcion: "ElPepe2",
        limiteInferiorReproceso: 512,
        limiteSuperiorReproceso: 1120,
        limiteInferiorObservado: 233,
        limiteSuperiorObservado: 732,
        id: 2,
    },
    {
        sku: 3,
        descripcion: "Elpepe3",
        limiteInferiorReproceso: 553,
        limiteSuperiorReproceso: 10,
        limiteInferiorObservado: 34,
        limiteSuperiorObservado: 67,
        id: 3,
    }
]

const ModelApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    //Cambiar estas 3 funciones, usar con context para no estar pasando a por cada hijo
    const createData = (data) => {
        data.id = Date.now(); // solo para simular un id
        console.log(data);
        setDb([...db, data]);
    };

    const updateData = (data) => { };

    const deleteData = (sku) => { };

    return (
        <div>
            <h2>Crud Modelo</h2>
            <ModelForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <ModelTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </div>
    )
}

export default ModelApp;
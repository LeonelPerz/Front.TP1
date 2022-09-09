import React, { useState, useEffect } from 'react';
import { GetModels, CreateModel } from '../../../Services/modelServices';
import ModelForm from '../Form/ModelForm';
import ModelTable2 from '../Table/ModelTable2';

const ModelApp = () => {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    useEffect(() => {
        GetModels().then((models) => setDb(models));
        return () => {
            setDb([])
        }
    }, [])

    //Cambiar estas 3 funciones, usar con context para no estar pasando por cada hijo
    const createData = (data) => {
        data.id = Date.now(); // solo para simular un id
        CreateModel(data);
        setDb([...db, data]);
    };
    const updateData = (data) => {
        let newData = db.map(element => element.id === data.id ? data : element);
        setDb(newData);
    };
    const deleteData = (sku) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${sku}'?`);
        if (isDelete) {
            let newData = db.filter(element => element.sku !== sku);
            setDb(newData);
        } else {
            return;
        }
    };

    return (
        <div>
            <h2>Crud Modelo</h2>
            <ModelForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />

            <hr />
            <ModelTable2
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} />

        </div>
    )
}

export default ModelApp;
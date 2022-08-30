import React from "react";
import ModelTableRow from "./ModelTableRow";

const ModelTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Sku</th>
            <th>Descripcion</th>
            <th>LimiteInferiorReproceso</th>
            <th>LimiteSuperiorReproceso</th>
            <th>LimiteInferiorObservado</th>
            <th>LimiteSuperiorObservado</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="7">Sin Datos</td>
            </tr>
          ) : (
            data.map((element) => (
              <ModelTableRow
                key={element.sku}
                element={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ModelTable;

import React from "react";

const ModelTableRow = ({ element, setDataToEdit, deleteData }) => {
  let {
    sku,
    descripcion,
    limiteInferiorReproceso,
    limiteInferiorObservado,
    limiteSuperiorReproceso,
    limiteSuperiorObservado,
  } = element;

  return (
    <tr>
      <td>{sku}</td>
      <td>{descripcion}</td>
      <td>{limiteInferiorReproceso}</td>
      <td>{limiteInferiorObservado}</td>
      <td>{limiteSuperiorReproceso}</td>
      <td>{limiteSuperiorObservado}</td>
      <td>
        <button onClick={() => setDataToEdit(element)}>Editar</button>
        <button onClick={() => deleteData(sku)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ModelTableRow;

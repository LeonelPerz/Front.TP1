import React, { useState, useEffect } from "react";

const initialForm = {
  sku: 0,
  descripcion: "",
  limiteInferiorReproceso: 0,
  limiteSuperiorReproceso: 0,
  limiteInferiorObservado: 0,
  limiteSuperiorObservado: 0,
  id: null,
};

const ModelForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    if (e.target.type === "number") {
      e.target.value = parseInt(e.target.value);
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.sku ||
      !form.descripcion ||
      !form.limiteInferiorObservado ||
      !form.limiteSuperiorObservado ||
      !form.limiteInferiorReproceso ||
      !form.limiteSuperiorReproceso
    ) {
      alert("Datos Incompletos");
      return;
    }

    if (form.id == null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          SKU
          <input
            type="number"
            name="sku"
            placeholder="Sku"
            value={form.sku}
            onChange={handleChange}
          />
        </label>

        <label>
          Descripcion
          <input
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            value={form.descripcion}
            onChange={handleChange}
          />
        </label>

        <label>
          Limite Inferior Reproceso
          <input
            type="number"
            name="limiteInferiorReproceso"
            placeholder="Limite Inferior Reproceso"
            value={form.limiteInferiorReproceso}
            onChange={handleChange}
          />
        </label>

        <label>
          Limite Superior Reproceso
          <input
            type="number"
            name="limiteSuperiorReproceso"
            placeholder="Limite Superior Reproceso"
            onChange={handleChange}
            value={form.limiteSuperiorReproceso}
          />
        </label>

        <label>
          Limite Inferior Observado
          <input
            type="number"
            name="limiteInferiorObservado"
            placeholder="Limite Inferior Observado"
            onChange={handleChange}
            value={form.limiteInferiorObservado}
          />
        </label>

        <label>
          Limite Superior Observado
          <input
            type="number"
            name="limiteSuperiorObservado"
            placeholder="Limite Superior Observado"
            onChange={handleChange}
            value={form.limiteSuperiorObservado}
          />
        </label>

        <input type="submit" vale="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default ModelForm;

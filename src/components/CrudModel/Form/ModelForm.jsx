import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import "./ModelForm.css";

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
        <TextField
          id="outlined-sku"
          label="SKU"
          InputLabelProps={{ shrink: true }}
          name="sku"
          value={form.sku}
          onChange={handleChange}
        />

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

        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant="contained" type="reset" onClick={handleReset}>
          Limpiar
        </Button>
      </form>
    </div>
  );
};

export default ModelForm;

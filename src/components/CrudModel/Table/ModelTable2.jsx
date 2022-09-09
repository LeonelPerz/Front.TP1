import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";

const ModelTable2 = ({ data, setDataToEdit, deleteData }) => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Limite Inferior Reproceso</TableCell>
            <TableCell>Limite Superior Reproceso</TableCell>
            <TableCell>Limite Inferior Observado</TableCell>
            <TableCell>Limite Superior Observado</TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element) => (
            <TableRow key={element.sku}>
              <TableCell> {element.sku} </TableCell>
              <TableCell>{element.descripcion}</TableCell>
              <TableCell>{element.limiteInferiorReproceso}</TableCell>
              <TableCell>{element.limiteInferiorObservado}</TableCell>
              <TableCell>{element.limiteSuperiorReproceso}</TableCell>
              <TableCell>{element.limiteSuperiorObservado}</TableCell>

              <TableCell>
                <IconButton onClick={() => deleteData(element.sku)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>

              <TableCell>
                <IconButton onClick={() => setDataToEdit(element)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ModelTable2;

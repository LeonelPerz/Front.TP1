import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  IconButton
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.sku}>
              <TableCell> {row.sku} </TableCell>
              <TableCell>{row.descripcion}</TableCell>
              <TableCell>{row.limiteInferiorReproceso}</TableCell>
              <TableCell>{row.limiteInferiorObservado}</TableCell>
              <TableCell>{row.limiteSuperiorReproceso}</TableCell>
              <TableCell>{row.limiteSuperiorObservado}</TableCell>
              
              
              <IconButton onClick={() => deleteData(row.sku)}>
                <DeleteIcon/>
              </IconButton>
              
              <IconButton onClick={() => setDataToEdit(row)}>
                <EditIcon/>
              </IconButton>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ModelTable2;

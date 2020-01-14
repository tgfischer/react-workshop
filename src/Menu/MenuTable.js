import React from "react";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper
} from "@material-ui/core";

export const MenuTable = ({ rows }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat (g)</TableCell>
          <TableCell align="right">Carbs (g)</TableCell>
          <TableCell align="right">Protein (g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({ id, name, calories, fat, carbs, protein }) => (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell align="right">{calories}</TableCell>
            <TableCell align="right">{fat}</TableCell>
            <TableCell align="right">{carbs}</TableCell>
            <TableCell align="right">{protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

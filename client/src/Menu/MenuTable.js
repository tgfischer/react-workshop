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
          <TableCell>Calories</TableCell>
          <TableCell>Fat (g)</TableCell>
          <TableCell>Carbs (g)</TableCell>
          <TableCell>Protein (g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({ id, name, calories, fat, carbs, protein }) => (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell>{calories}</TableCell>
            <TableCell>{fat}</TableCell>
            <TableCell>{carbs}</TableCell>
            <TableCell>{protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

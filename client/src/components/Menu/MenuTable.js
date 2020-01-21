import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableSortLabel,
  Paper
} from "@material-ui/core";

import { useMenuTable } from "./hooks";

const MenuTable = ({ columns, ...props }) => {
  const { rows, orderBy, direction, handleSort } = useMenuTable(props);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ id, name }) => (
              <TableCell
                key={id}
                sortDirection={orderBy === id ? direction : false}
              >
                <TableSortLabel
                  active={orderBy === id}
                  direction={orderBy === id ? direction : "asc"}
                  onClick={handleSort(id)}
                >
                  {name}
                </TableSortLabel>
              </TableCell>
            ))}
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
};

MenuTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default MenuTable;

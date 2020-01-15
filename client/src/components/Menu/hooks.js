import { useEffect, useState, useMemo } from "react";
import useAxios from "axios-hooks";
import orderBy from "lodash/orderBy";

const columns = [
  {
    id: "name",
    name: "Dessert (100g serving)"
  },
  {
    id: "calories",
    name: "Calories"
  },
  {
    id: "fat",
    name: "Fat (g)"
  },
  {
    id: "carbs",
    name: "Carbs (g)"
  },
  {
    id: "protein",
    name: "Protein (g)"
  }
];

export const useMenu = () => {
  const [{ data, loading }, handleRequest] = useAxios(
    `${process.env.REACT_APP_API_URL}/api/menu`
  );
  useEffect(() => void handleRequest(), [handleRequest]);
  return {
    columns,
    rows: data || [],
    isLoading: loading
  };
};

export const useMenuTable = ({ rows }) => {
  const [state, setState] = useState({});
  return {
    ...state,
    rows: useMemo(() => orderBy(rows, [state.orderBy], [state.direction]), [
      rows,
      state.orderBy,
      state.direction
    ]),
    handleSort: id => () =>
      setState(state => ({
        orderBy: id,
        direction:
          state.orderBy === id && state.direction === "asc" ? "desc" : "asc"
      }))
  };
};

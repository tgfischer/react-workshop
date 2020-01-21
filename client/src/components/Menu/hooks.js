import { useEffect, useState, useMemo } from "react";
import useAxios from "axios-hooks";
import orderBy from "lodash/orderBy";

import { columns } from "./constants";

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

import { useEffect } from "react";
import useAxios from "axios-hooks";

export const useMenu = () => {
  const [{ data, loading }, handleRequest] = useAxios(
    process.env.REACT_APP_API_URL
  );
  useEffect(() => handleRequest(), [handleRequest]);
  return {
    rows: data,
    isLoading: loading
  };
};

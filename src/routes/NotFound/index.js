import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return <h1>A página {location.pathname} não foi encontrada</h1>;
};

export default NotFound;

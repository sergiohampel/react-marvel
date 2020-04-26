import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/characters">Listar personagens</Link>
    </>
  );
};

export default {
  routeProps: {
    path: "/",
    component: Home,
    exact: true,
  },
  name: "Home",
};

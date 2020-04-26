import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { name } = useParams();

  return (
    <>
      <h1>Character details - {name}</h1>
    </>
  );
};

export default {
  routeProps: {
    path: "/characters/:name",
    component: CharacterDetails,
  },
  name: "CharacterDetails",
};

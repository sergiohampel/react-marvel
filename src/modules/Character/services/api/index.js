import api from "../../../../services/api/";

const resources = {
  characters: "v1/public/characters",
};

export const getCharacters = async () => {
  const response = await api.get(resources.characters);

  return response.data.data;
};

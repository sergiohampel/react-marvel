import api from "../../../../services/api/";

const resources = {
  characters: "v1/public/characters",
};

export const getCharacters = async (name) => {
  const response = await api.get(resources.characters, {
    params: {
      nameStartsWith: name || "a",
    },
  });

  return response.data.data;
};

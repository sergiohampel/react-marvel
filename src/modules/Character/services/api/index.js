import api from "../../../../services/api/";

export const getCharacters = async (name) => {
  const response = await api.get("v1/public/characters", {
    params: {
      nameStartsWith: name || "a",
    },
  });

  return response.data.data;
};

export const getCharacterById = async (id) => {
  const response = await api.get(`v1/public/characters/${id}`);

  return response.data.data;
};

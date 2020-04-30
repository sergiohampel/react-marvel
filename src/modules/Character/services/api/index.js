import api from "../../../../services/api/";

export const getCharacters = async (name) => {
  const response = await api.get("v1/public/characters", {
    params: {
      nameStartsWith: name,
    },
  });

  return response.data.data;
};

export const getCharacterById = async (id) => {
  const response = await api.get(`v1/public/characters/${id}`);

  return response.data.data;
};

export const getCharacterSeries = async (id) => {
  const response = await api.get(`v1/public/characters/${id}/series`);

  return response.data.data;
};

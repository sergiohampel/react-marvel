import React, { useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import {
  loadCharacterDetails,
  loadCharacterDetailsSuccess,
  resetDetails,
} from "./store/actions-creators";

import {
  selectCharacterDetails,
  selectCharacterDetailsThumb,
  selectLoadingDetails,
} from "./store/selectors";

import * as S from "./styles";

import { getCharacterById } from "./services/api/";

const CharacterDetails = () => {
  const { id } = useParams();

  const details = useSelector(selectCharacterDetails);
  const thumbnail = useSelector(selectCharacterDetailsThumb);
  const loadingDetails = useSelector(selectLoadingDetails);

  const dispatch = useDispatch();

  const load = useCallback(
    async (characterId) => {
      dispatch(loadCharacterDetails());

      const data = await getCharacterById(characterId);

      dispatch(loadCharacterDetailsSuccess(data.results[0]));
    },
    [dispatch]
  );

  useEffect(() => {
    load(id);

    return () => dispatch(resetDetails());
  }, [load, id, dispatch]);

  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <S.Details>
      <S.ButtonIcon onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleLeft} color="#fff" />
      </S.ButtonIcon>

      <S.DetailsSection>
        <S.DetailsContent>
          {loadingDetails && <p>Loading...</p>}

          <S.DetailsTitle>{details.name}</S.DetailsTitle>

          <S.DetailsDescription>{details.description}</S.DetailsDescription>
        </S.DetailsContent>

        {thumbnail && (
          <S.DetailsImage
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={thumbnail.name}
          />
        )}
      </S.DetailsSection>
    </S.Details>
  );
};

export default {
  routeProps: {
    path: "/characters/:id",
    component: CharacterDetails,
  },
  name: "CharacterDetails",
};

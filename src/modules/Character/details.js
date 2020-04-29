import React, { useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import {
  loadCharacterDetails,
  loadCharacterDetailsSuccess,
  loadCharacterSeries,
  loadCharacterSeriesSuccess,
  resetDetails,
} from "./store/actions-creators";

import {
  selectCharacterDetails,
  selectCharacterDetailsThumb,
  selectLoadingDetails,
  selectAmountAvailableSeries,
  selectAmountAvailableComics,
  selectAmountAvailableStories,
  selectAmountAvailableEvents,
  selectLoadingCharacterSeries,
  selectCharacterSeries,
  selectLoadedCharacterSeries,
} from "./store/selectors";

import * as S from "./styles";

import SeriesCard from "./components/SeriesCard/";

import { getCharacterById, getCharacterSeries } from "./services/api/";

const CharacterDetails = () => {
  const { id } = useParams();

  const details = useSelector(selectCharacterDetails);
  const thumbnail = useSelector(selectCharacterDetailsThumb);
  const loadingDetails = useSelector(selectLoadingDetails);
  const amountAvailableSeries = useSelector(selectAmountAvailableSeries);
  const amountAvailableComics = useSelector(selectAmountAvailableComics);
  const amountAvailableStories = useSelector(selectAmountAvailableStories);
  const amountAvailableEvents = useSelector(selectAmountAvailableEvents);
  const loadingCharacterSeries = useSelector(selectLoadingCharacterSeries);
  const characterSeries = useSelector(selectCharacterSeries);
  const loadedCharacterSeries = useSelector(selectLoadedCharacterSeries);

  const dispatch = useDispatch();

  const loadSeries = useCallback(
    async (characterId) => {
      dispatch(loadCharacterSeries());

      const data = await getCharacterSeries(characterId);

      dispatch(loadCharacterSeriesSuccess(data.results));
    },
    [dispatch]
  );

  const load = useCallback(
    async (characterId) => {
      dispatch(loadCharacterDetails());

      const data = await getCharacterById(characterId);

      dispatch(loadCharacterDetailsSuccess(data.results[0]));

      if (data.results[0].series.available > 0) {
        loadSeries(id);
      }
    },
    [dispatch, id, loadSeries]
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

          <S.DetailsParticipation>
            Series: {amountAvailableSeries} | Comics: {amountAvailableComics} |
            Stories: {amountAvailableStories} | Events: {amountAvailableEvents}
          </S.DetailsParticipation>
        </S.DetailsContent>

        {thumbnail && (
          <S.DetailsImage
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={thumbnail.name}
          />
        )}

        {loadingCharacterSeries && (
          <S.SeriesTitle>Loading series...</S.SeriesTitle>
        )}

        {loadedCharacterSeries && (
          <S.SeriesContainer>
            <S.SeriesTitle>Series</S.SeriesTitle>

            <S.Series>
              {characterSeries.map((serie) => (
                <S.SeriesItem key={serie.id}>
                  <SeriesCard serie={serie} />
                </S.SeriesItem>
              ))}
            </S.Series>
          </S.SeriesContainer>
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

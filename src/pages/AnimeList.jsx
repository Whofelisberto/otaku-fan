import React from 'react'
import AnimeCapa from './AnimeCapa'
import { capasArrays } from '../assets/database/capas'

const AnimeList = ({ type }) => {
  return (
    <>
      {type === "capas" || type === undefined ? (
        <AnimeCapa
          title="capas"
          items={12}
          itemsArray={capasArrays}
        />
      ) : null}
    </>
  );
};

export default AnimeList;

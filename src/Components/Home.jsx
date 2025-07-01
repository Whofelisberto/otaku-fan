import React from "react";
import Section from "./Section";
import Content from "./Content";
import ItemList from "./ItemList";
import { episodioArrays } from "../assets/database/episodios";

const Home = ({ type }) => {
  return (
    <>
      <Section />
      {type === "episodio" || type === undefined ? (
        <Content title="episodio" items={12} itemsArray={episodioArrays} />
      ) : null}
      <ItemList />
    </>
  );
};

export default Home;

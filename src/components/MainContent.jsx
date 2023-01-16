import React from "react";
import Card from "./Card";
import dataBase from "../dataBase.js";

export default function MainContent() {
  const cardsCollection = dataBase.map((item) => (
    <Card key={item.id} content={item} />
  ));

  return (
    <main className="main">
      <div className="cards">{cardsCollection}</div>
    </main>
  );
}
/*
listar todos os cards
cada card tem
    - photo
    - location
    - link
    - titulo
    - data
    - descricao
*/

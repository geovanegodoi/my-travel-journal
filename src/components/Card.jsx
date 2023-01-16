import React from "react";
import Location from "./Localtion";

export default function Card(props) {
  const { picture, location, title, date, description } = props.content;
  return (
    <div className="card">
      <img className="card--photo" src={picture} />
      <div className="card--content">
        <Location name={location} />
        <h1 className="card--content--title">{title}</h1>
        <p className="card--content--date">{date}</p>
        <p className="card--content--description">{description}</p>
      </div>
    </div>
  );
}

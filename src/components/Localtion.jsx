import React from "react";

export default function Localtion(props) {
  return (
    <div>
      <i className="fa fa-map-marker"></i>
      <span className="card--content--link">{props.name}</span>
      <span className="card--content--link--google">view on Google Maps</span>
    </div>
  );
}

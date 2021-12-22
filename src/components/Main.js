import planetData from "../Data";
import React, { useState } from "react";

export default function Main(props) {
  const [planetState, setPlanetState] = useState({
    img: "planet",
    para: "overview",
  });

  function handleOverview() {
    setPlanetState({
      img: "planet",
      para: "overview",
    });
  }

  function handleStructure() {
    setPlanetState({
      img: "internal",
      para: "structure",
    });
  }

  function handleSurface() {
    setPlanetState({
      img: "geology",
      para: "geology",
    });
  }

  return (
    <div>
      <div className="infoBoxes">
        <div onClick={handleOverview} className="overview">
          OVERVIEW
        </div>
        <div onClick={handleStructure} className="structure">
          STRUCTURE
        </div>
        <div onClick={handleSurface} className="surface">
          SURFACE
        </div>
      </div>

      <img
        src={planetData[props.planetNumber].images[planetState.img]}
        alt="Outer Earth"
        className="earth"
      />

      <div className="planet--text">
        <h1 className="main--title">{planetData[props.planetNumber].name}</h1>
        <p className="main--para">
          {planetData[props.planetNumber][planetState.para].content}
        </p>
      </div>
    </div>
  );
}

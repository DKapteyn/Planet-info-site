import planetData from "../Data";
import React, { useState } from "react";

export default function Main(props) {

  //STATE AND FUNCTIONS TO UPDATE AND CONTROL DATA FROM DATA.JS

  const [planetState, setPlanetState] = useState({
    img: "planet",
    para: "overview",
    background: "-activeoverview",
    img2: null,
  });

  function handleOverview() {
    setPlanetState({
      img: "planet",
      para: "overview",
      background: "-activeoverview",
      img2: null,
    });
  }

  function handleStructure() {
    setPlanetState({
      img: "internal",
      para: "structure",
      background: "-activestructure",
      img2: null,
    });
  }


  function handleSurface() {
    setPlanetState({
      img: "planet",
      para: "geology",
      background: "-activegeology",
      img2: "geology",
    });
  }

  return (
    <div className="main--container">
      <div className="infoBoxes">
        <div
          className={`overview${planetState.background} iBox`}
          onClick={handleOverview}
        >
          <p className="infonumber">01</p>
          <p className="infoname">OVERVIEW</p>
          <p className="infonamemobile">OVERVIEW</p>
        </div>
        <div
          className={`structure${planetState.background} iBox`}
          onClick={handleStructure}
        >
          <p className="infonumber">02</p>
          <p className="infoname">INTERNAL STRUCTURE</p>
          <p className="infonamemobile">STRUCTURE</p>
        </div>
        <div
          className={`geology${planetState.background} iBox`}
          onClick={handleSurface}
        >
          <p className="infonumber">03</p>
          <p className="infoname">SURFACE GEOLOGY</p>
          <p className="infonamemobile">SURFACE</p>
        </div>
      </div>

      <div className="imgcontainer">
        <img
          src={planetData[props.planetNumber].images[planetState.img]}
          alt="Outer planet"
          className="planetPic"
        />
        {planetState.img2 !== null && (
          <img
            src={planetData[props.planetNumber].images[planetState.img2]}
            alt=""
            className="secondPlanetPic"
          />
        )}
      </div>

      <div className="planet--text">
        <h1 className="main--title">{planetData[props.planetNumber].name.toUpperCase()}</h1>
        <p className="main--para">
          {planetData[props.planetNumber][planetState.para].content}
        </p>
        <div className="main--source">
          <span className="source">Source:</span>
          <a href={planetData[props.planetNumber][planetState.para].source}>
            <span className="wiki">Wikipidia</span>
            <img
              className="arrowPic"
              src="/assets/icon-source.svg"
              alt="arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

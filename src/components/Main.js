import planetData from "../Data";
import React, { useState } from "react";

export default function Main(props) {
 
 
  const [planetState, setPlanetState] = useState({
    img: "planet",
    para: "overview",
    background:"-activeoverview"
    
  
  });

  function handleOverview() {
    setPlanetState({
      img: "planet",
      para: "overview",
      background:"-activeoverview"
    
    });
  }

  function handleStructure() {
    setPlanetState({
      img: "internal",
      para: "structure",
     background:"-activestructure"
    });
  }

  function handleSurface() {
    setPlanetState({
      img: "geology",
      para: "geology",
    background:"-activegeology"
    });
  }

  return (
    
      <div className="main--container">
        <div className="infoBoxes">
          <div
            className={`overview${planetState.background}`}
            onClick={handleOverview}
          >
            <p className="infonumber">01</p>
            <p className="infoname">OVERVIEW</p> 
          </div>
          <div
            className={`structure${planetState.background}`}
            onClick={handleStructure}
          >
             <p className="infonumber">02</p>
            <p className="infoname">INTERNAL STRUCTURE</p> 
          </div>
          <div
            className={`geology${planetState.background}`}
            onClick={handleSurface}
          >
               <p className="infonumber">03</p>
            <p className="infoname">SURFACE GEOLOGY</p> 
          </div>
        </div>

      <div className="imgcontainer">
        <img
          src={planetData[props.planetNumber].images[planetState.img]}
          alt="Outer planet"
          className="planetPic"
        />
        </div>

        <div className="planet--text">
          <h1 className="main--title">{planetData[props.planetNumber].name}</h1>
          <p className="main--para">
            {planetData[props.planetNumber][planetState.para].content}
          </p>
          </div>
          <div className="main--source">
            <span className="source">
              Source:
            </span>
            <a href={planetData[props.planetNumber][planetState.para].source}>
           <span className="wiki">Wikipidia</span>  <img src="/assets/icon-source.svg" alt="arrow"/>
          </a>
            </div>
        
      </div>
    
  );
}

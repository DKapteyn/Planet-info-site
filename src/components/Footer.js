import planetData from "../Data"

export default function Footer(props) {
    return (
        <div className="footer--container">
           <div className="stats"> <h3>ROTATION TIME</h3>  <h1>{planetData[props.planetNumber].rotation}</h1></div>
           <div className="stats"><h3>REVOLUTION TIME</h3> <h1>{planetData[props.planetNumber].revolution}</h1></div>
           <div className="stats"><h3>RADIUS</h3> <h1>{planetData[props.planetNumber].radius}</h1></div>
           <div className="stats"><h3>AVERAGE TEMP</h3> <h1>{planetData[props.planetNumber].temperature}</h1></div>
        </div>
    )
}


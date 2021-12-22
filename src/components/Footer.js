import planetData from "../Data"

export default function Footer(props) {
    return (
        <div className="footer--container">
           <div className="stats">{planetData[props.planetNumber].rotation}</div>
           <div className="stats">{planetData[props.planetNumber].revolution}</div>
           <div className="stats">{planetData[props.planetNumber].radius}</div>
           <div className="stats">{planetData[props.planetNumber].temperature}</div>
        </div>
    )
}


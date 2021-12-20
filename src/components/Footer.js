export default function Footer(props) {
    return (
        <div className="footer--container">
           <div className="stats">{props.rotation}</div>
           <div className="stats">{props.revolution}</div>
           <div className="stats">{props.radius}</div>
           <div className="stats">{props.temperature}</div>
        </div>
    )
}


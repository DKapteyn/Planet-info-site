export default function Main(props) {
    return (
        <div>
            <img src={props.image} alt="Outer Earth" className="earth" />
            <div className="planet--text">
                <h1 className="main--title">
                {props.planet}
                
                
                </h1>
                <p className="main--para">
                {props.para}
                </p>
            </div>
        </div>
    )
}


import { Link } from "react-router-dom";



export default function Header(props) {
 
 
  return (
    <div className="header--container">
      <h1 className="header--title">THE PLANETS</h1>

      <ul className={`header--colorChange${props.color} header--planetlist`}>
        <li
          className="header--planet"
          onClick={() => props.changeColor("Mercury")}
        >
          <Link to="Mercury">
           MERCURY
            </Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Venus")}
        >
          <Link to="Venus">VENUS</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Earth")}
        >
          <Link to="Earth">EARTH</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Mars")}
        >
          <Link to="Mars">MARS</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Jupiter")}
        >
          <Link to="Jupiter">JUPITER</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Saturn")}
        >
          <Link to="Saturn">
            SATURN
          </Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Uranus")}
        >
          <Link to="Uranus">
             URANUS
             </Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Neptune")}
        >
          <Link to="Neptune">
            NEPTUNE
            </Link>
        </li>
      </ul>

      <img
      onClick={() => props.changeDropDown()}
        src="/assets/icon-hamburger.svg"
        alt="hamburger-icon"
        className="header--img"
      />
    </div>
  );
}



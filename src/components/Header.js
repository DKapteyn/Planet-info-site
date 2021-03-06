import { Link } from "react-router-dom";
import { useContext } from "react";
import { dropDownContext } from "../App";

export default function Header(props) {
  const dropDown = useContext(dropDownContext);

  return (
    <div className={`header--container`}>
      <h1 className="header--title">THE PLANETS</h1>

      <ul className={`header--colorChange${props.color} header--planetlist`}>
        <li
          className="header--planet"
          onClick={() => props.changeColor("Mercury")}
        >
          <Link to="/Planet-info-site/Mercury">MERCURY</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Venus")}
        >
          <Link to="/Planet-info-site/Venus">VENUS</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Earth")}
        >
          <Link to="/Planet-info-site/Earth">EARTH</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Mars")}
        >
          <Link to="/Planet-info-site/Mars">MARS</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Jupiter")}
        >
          <Link to="/Planet-info-site/Jupiter">JUPITER</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Saturn")}
        >
          <Link to="/Planet-info-site/Saturn">SATURN</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Uranus")}
        >
          <Link to="/Planet-info-site/Uranus">URANUS</Link>
        </li>
        <li
          className="header--planets"
          onClick={() => props.changeColor("Neptune")}
        >
          <Link to="/Planet-info-site/Neptune">NEPTUNE</Link>
        </li>
      </ul>

      <svg
        className={`header--img header--img${dropDown}`}
        onClick={() => props.changeDropDown()}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="17"
      >
        <g fill-rule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </div>
  );
}

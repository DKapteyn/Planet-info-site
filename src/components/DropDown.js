import planetData from "../Data";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  return (
    <div>
      <ul className="dropdown--listitems">
        <li>
          <Link to="Mercury">
            <Listitems 
            planetNumber={0}
             />
          </Link>
        </li>
        <li>
          <Link to="Venus">
            <Listitems planetNumber={1} />
          </Link>
        </li>
        <li>
          <Link to="Earth">
            <Listitems planetNumber={2} />
          </Link>
        </li>
        <li>
          <Link to="Mars">
            <Listitems planetNumber={3} />
          </Link>
        </li>
        <li>
          <Link to="Jupiter">
            <Listitems planetNumber={4} />
          </Link>
        </li>
        <li>
          <Link to="Saturn">
            <Listitems planetNumber={5} />
          </Link>
        </li>
        <li>
          <Link to="Uranus">
            <Listitems planetNumber={6} />
          </Link>
        </li>
        <li>
          <Link to="Neptune">
            <Listitems planetNumber={7} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Listitems(props) {
  return (
    <div className="dropdown-items" onClick ={() => props.changeDropDown()}>
      <div
      
        className={`dropdownPlanetColors${props.planetNumber} dropdownPlanetColors`}
      ></div>
      <h1 className="dropdown--Planetlist"
      >
        {planetData[props.planetNumber].name.toUpperCase()}
      </h1>
      <img
        className="dropdown--chevron"
        src="assets/icon-chevron.svg"
        alt="chevron"
      />
    </div>
  );
}

import planetData from "../Data";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dropDownContext } from "../App";




export default function Dropdown({changeDropDown }) {
  return (
    
      <ul className="dropdown--listitems">
        <li>
          <Link to="Mercury">
            <Listitems planetNumber={0} 
       
            changeDropDown = {changeDropDown}
            />
          </Link>
        </li>
        <li>
          <Link to="Venus">
            <Listitems planetNumber={1} 
          changeDropDown = {changeDropDown} />
          </Link>
        </li>
        <li>
          <Link to="Earth">
            <Listitems planetNumber={2} 
            changeDropDown = {changeDropDown} />
          </Link>
        </li>
        <li>
          <Link to="Mars">
            <Listitems planetNumber={3} 
           changeDropDown = {changeDropDown} />
          </Link>
        </li>
        <li>
          <Link to="Jupiter">
            <Listitems planetNumber={4}
              changeDropDown = {changeDropDown} />
          </Link>
        </li>
        <li>
          <Link to="Saturn">
            <Listitems planetNumber={5} 
               changeDropDown = {changeDropDown}/>
          </Link>
        </li>
        <li>
          <Link to="Uranus">
            <Listitems planetNumber={6} 
              changeDropDown = {changeDropDown} />
          </Link>
        </li>
        <li>
          <Link to="Neptune">
            <Listitems planetNumber={7} 
         
             changeDropDown = {changeDropDown} />
          </Link>
        </li>
      </ul>
    
  );
}

function Listitems(props) {

  const visible = useContext(dropDownContext)
  return (
    <div
      className={`dropdown-items${visible}`}
      onClick={() => props.changeDropDown()}
    >
      <div
        className={`dropdownPlanetColors${props.planetNumber} dropdownPlanetColors`}
      ></div>
      <h1 className="dropdown--Planetlist">
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

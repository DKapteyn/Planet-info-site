import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header--container">
         <h1 className="header--title">THE PLANETS</h1>
       
       <ul className="header--planetlist">
            <li className="header--planets"><Link to="Mercury">MERCURY</Link></li>
            <li className="header--planets"><Link to="Venus">VENUS</Link></li>
            <li className="header--planets"><Link to="Earth">EARTH</Link></li>
            <li className="header--planets"><Link to="Mars">MARS</Link></li>
            <li className="header--planets"><Link to="Jupiter">JUPITER</Link></li>
            <li className="header--planets"><Link to="Saturn">SATURN</Link></li>
            <li className="header--planets"><Link to="Uranus">URANUS</Link></li>
            <li className="header--planets"><Link to="Neptune">NEPTUNE</Link></li>

       </ul>
            
        </div>
    )
}

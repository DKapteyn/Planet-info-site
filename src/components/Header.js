import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header--container">
         <h1 className="header--title">THE PLANETS</h1>
       
       <ul className="header--planetlist">
            <li className="header--planets"><Link to="Mercury">MERCURY</Link></li>
            <li className="header--planets"><Link to="Venus">VENUS</Link></li>
            <li className="header--planets"><Link to="/Earth">EARTH</Link></li>
            <li className="header--planets"><Link to="Mars">MARS</Link></li>
            <li className="header--planets">JUPITER</li>
            <li className="header--planets">SATURN</li>
            <li className="header--planets">URANUS</li>
            <li className="header--planets">NEPTUNE</li>

       </ul>
            
        </div>
    )
}

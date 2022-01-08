import Header from "./components/Header";
import Dropdown from "./components/DropDown";


import "./sass/App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Planet from "./pages/Planet";
import { useState } from "react";

function App() {

const [color, setColor] = useState('Earth');
const [dropDown, setDropDown] = useState(false)


function changeColor(planetname){
  setColor(planetname)
}

function changeDropDown(){
  setDropDown(!dropDown)
  
}


  return (
    <div className="App">
    <Router>
       <Header
      color = {color}
      changeColor = {changeColor}
      changeDropDown = {changeDropDown}
      /> 

    {dropDown && <Dropdown
    changeDropDown = {changeDropDown}
    />}
        
        <Routes>
          <Route path="/" element={<Navigate to="Earth" />} />
          <Route
            path="Mercury"
            element={<Planet dropDown={dropDown} class="mercury" planetNumber={0} />}
          />
          <Route
            path="Venus"
            element={<Planet dropDown={dropDown} planetNumber={1} class="venus" />}
          />
          <Route
            path="Earth"
            element={<Planet dropDown={dropDown} planetNumber={2} class="earth" />}
          />
          <Route
            path="Mars"
            element={<Planet dropDown={dropDown} planetNumber={3} class="mars" />}
          />
          <Route
            path="Jupiter"
            element={<Planet dropDown={dropDown} planetNumber={4} class="jupiter" />}
          />
          <Route
            path="Saturn"
            element={<Planet dropDown={dropDown} planetNumber={5} class="saturn" />}
          />
          <Route
            path="Uranus"
            element={<Planet dropDown={dropDown} planetNumber={6} class="uranus" />}
          />
          <Route
            path="Neptune"
            element={<Planet dropDown={dropDown} planetNumber={7} class="neptune" />}
          />
        </Routes>
       
    </Router>
    </div>
  );
}

export default App;

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
import { useState, createContext} from "react";

export const dropDownContext = createContext("")

function App() {

const [color, setColor] = useState('Earth');
const [dropDownVisibility, setDropDownVisibility] = useState("noDropDown")


function changeColor(planetname){
  setColor(planetname)
}

//Changes the visibility of planets and dropdown menu when clicked

function changeDropDown(){
  setDropDownVisibility(prevDD => prevDD === "noDropDown"? "dropDown":"noDropDown")
  
}


  return (
    <div className="App">
    <Router>
    
       <Header
      color = {color}
      changeColor = {changeColor}
      changeDropDown = {changeDropDown}
      /> 

     <dropDownContext.Provider value={dropDownVisibility}>  
     <Dropdown
     changeDropDown = {changeDropDown}
     dropDownVisibility = {dropDownVisibility}
     />
    

      
        
        <Routes>
          <Route path="/" element={<Navigate to="Earth" />} />
          <Route
            path="Mercury"
            element={<Planet class="mercury" planetNumber={0} />}
          />
          <Route
            path="Venus"
            element={<Planet planetNumber={1} class="venus" />}
          />
          <Route
            path="Earth"
            element={<Planet  planetNumber={2} class="earth" />}
          />
          <Route
            path="Mars"
            element={<Planet  planetNumber={3} class="mars" />}
          />
          <Route
            path="Jupiter"
            element={<Planet  planetNumber={4} class="jupiter" />}
          />
          <Route
            path="Saturn"
            element={<Planet  planetNumber={5} class="saturn" />}
          />
          <Route
            path="Uranus"
            element={<Planet  planetNumber={6} class="uranus" />}
          />
          <Route
            path="Neptune"
            element={<Planet  planetNumber={7} class="neptune" />}
          />
        </Routes>
        </dropDownContext.Provider>
    </Router>
   
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Dropdown from "./components/DropDown";
import "./sass/App.scss";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Planet from "./pages/Planet";
import { useState, createContext } from "react";
import { AnimatePresence } from "framer-motion";

export const dropDownContext = createContext("");

function App() {
  //CHANGES COLORS BASED ON PLANET NAME
  const [color, setColor] = useState("Earth");

  function changeColor(planetname) {
    setColor(planetname);
  }

  //CHANGES CSS WHEN DROPDOWN MENU IS VISIBLE THROUGH THE "dropDownContext"
  const [dropDownVisibility, setDropDownVisibility] = useState("noDropDown");

  //Changes the visibility of planets and dropdown menu when clicked

  function changeDropDown() {
    setDropDownVisibility((prevDD) =>
      prevDD === "noDropDown" ? "dropDown" : "noDropDown"
    );
  }

  const location = useLocation();

  return (
    <div className="App">
      <dropDownContext.Provider value={dropDownVisibility}>
        <Header
          color={color}
          changeColor={changeColor}
          changeDropDown={changeDropDown}
        />

        <Dropdown
          changeDropDown={changeDropDown}
          dropDownVisibility={dropDownVisibility}
        />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
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
              element={<Planet planetNumber={2} class="earth" />}
            />
            <Route
              path="Mars"
              element={<Planet planetNumber={3} class="mars" />}
            />
            <Route
              path="Jupiter"
              element={<Planet planetNumber={4} class="jupiter" />}
            />
            <Route
              path="Saturn"
              element={<Planet planetNumber={5} class="saturn" />}
            />
            <Route
              path="Uranus"
              element={<Planet planetNumber={6} class="uranus" />}
            />
            <Route
              path="Neptune"
              element={<Planet planetNumber={7} class="neptune" />}
            />
          </Routes>
        </AnimatePresence>
      </dropDownContext.Provider>
    </div>
  );
}

export default App;

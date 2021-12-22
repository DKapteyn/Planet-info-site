
import Header from "./components/Header";
import "./sass/App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Planet from "./pages/Planet";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="Earth" />} />
        <Route path="Mercury" element={
        <Planet
        class = "mercury"
        planetNumber={0} />
        }/>
      
        <Route path="Venus" element={<Planet
        planetNumber={1}
        class = "venus" />} />
        <Route path="Earth" element={<Planet 
        planetNumber={2} />} />
        <Route path="Mars" element={<Planet
        planetNumber={3} />} />
        <Route path="Jupiter" element={<Planet
        planetNumber={4} />} />
        <Route path="Saturn" element={<Planet
        planetNumber={5} />} />
        <Route path="Uranus" element={<Planet 
        planetNumber={6} />} />
        <Route path="Neptune" element={<Planet
        planetNumber={7} />} />
      </Routes>
    </Router>
  );
}

export default App;

import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';

import Header from './components/Header';

import './sass/App.scss';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";


function App() {



  return (
    <Router>
      <Header/>
      <Routes>
    <Route path="/"  element={<Navigate to='Earth'/>}/>
    <Route path="Mercury"  element={<Mercury/>}/>
    <Route path="Venus"  element={<Venus/>}/>
    <Route path="Earth"  element={<Earth/>}/>
    <Route path="Mars" element={<Mars/>}/>
    <Route path="Jupiter"  element={<Jupiter/>}/>
    <Route path="Saturn"  element={<Saturn/>}/>
    
    <Route path="Uranus"  element={<Uranus/>}/>
      
    <Route path="Neptune"  element={<Neptune/>}/>
    
    
      </Routes>
    </Router>
  );
}

export default App;

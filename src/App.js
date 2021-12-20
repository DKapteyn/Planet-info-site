import Mars from './pages/Mars';
import Earth from './pages/Earth';
import Header from './components/Header';

import './sass/App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {



  return (
    <Router>
      <Header/>
      <Routes>
    <Route path="/"  element={<Earth/>}/>
    <Route path="Earth"  element={<Earth/>}/>
      <Route path="Mars" element={<Mars/>}/>
    
    
    
      </Routes>
    </Router>
  );
}

export default App;

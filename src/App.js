
//import './App.css';
// import {Button} from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'; 
import NavBar from "./components/navbar/NavBar";
// import InfoProjet from "./components/form/InfoProjet";
import Test from "./components/form/Test";
function App() {
  return (
     <div className="App">
      <NavBar/>
      {/* <InfoProjet/> */}
      <Test/>
    </div>
  );
}

export default App;

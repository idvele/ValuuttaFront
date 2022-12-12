import { useState } from "react";
import React from "react";
import Rate from "./Rate";
import Palkki from"./navbar";
import Entrybox from "./entrybox";
import Ratebutton from "./ratebutton";
import Newrate from "./newrate";
import Answer from "./answer";
import Card from 'react-bootstrap/Card';



function App() {
  
 
  return (
    <div className="App">
      <div class="row">
     <Palkki/>
     
     <div class= "col-sm-7 center">
      <div className="left">
      <Entrybox/>
      <div class="rates">
     <Ratebutton/>
     </div>
     <Newrate/>
     </div>
    </div>

     <div class= "col-sm-5">
     <Answer/>
     </div>
     </div>
    </div>
  );
}

export default App;

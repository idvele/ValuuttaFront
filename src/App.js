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
        <Palkki/>
      <div className="row">
     
          <div className= "col-sm-7 left" >
        
            <div id ="LeftItem">
              <Entrybox />
            <div/>

            <div id="LeftItem">
              <div className="rates">
                <Ratebutton />
              </div>
            </div>

           </div>

            <div id= "LeftItem">
              <Newrate />
            </div>
          </div>
                

        <div className= "col-sm-5">
          <Answer/>
        </div>
     </div>
      
    </div>
  );
}

export default App;

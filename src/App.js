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
  
  //Valuuttavalinnan muuttuja
  const[currency, NewCurrency]=useState("empty")
  //kurssi
  const[rate, NewRate]= useState(1)
  //valuuttamäärä
  const[amount, NewAmount]=useState(0)
  //tulos
  const[outcome, NewOutcome]= useState("...")

  //lasketaan tulos
  function result(rate, amount){
  console.log(rate);
  console.log(amount);
  NewOutcome(rate*amount)
}

  //Valuuttamäärän vaihto
  function HandleAmountChange(event){
    NewAmount(event.target.value)
    console.log(event.target.value);
  }
 
  return (
    <div className="App">
        <Palkki/>
      <div className="row">
     
          <div className= "col-sm-7 left" >
        
            <div id ="LeftItem">
              <Entrybox onChange={HandleAmountChange}/>
            <div/>

            <div id="LeftItem">
              <div className="rates" onClick={()=>result(rate,amount) }>
                <Ratebutton />
              </div>
            </div>

           </div>

            <div id= "LeftItem">
              <Newrate />
            </div>
          </div>
                

        <div className= "col-sm-5">
          <Answer
          outcome={outcome}/>
        </div>
     </div>
      
    </div>
  );
}

export default App;

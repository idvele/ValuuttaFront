import { useState } from "react";
import React from "react";
import Rate from "./components/Rate";
import Palkki from"./components/navbar";
import Entrybox from "./components/entrybox";
import Ratebutton from "./components/ratebutton";
import Newrate from "./components/newrate";
import Answer from "./components/answer";
import Card from 'react-bootstrap/Card';
import fetchData from "./Methods/fetchdata";



function App() {
  
  //Valuuttavalinnan muuttuja
  const[currency, NewCurrency]=useState("empty")
  //kurssi
  const[rate, NewRate]= useState(1)
  const [allRates, SetAllRates]= useState({})
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
    // console.log(event.target.value);
  }

  function passer(props){
    console.log("passaus toimii");
    Newrate(props)
  }

  //kurssihaku Apista

  // useEffect(()=>{
  //   getRateButtons();
  //  })
  //        function getRateButtons(){
  //         const url = 'https://localhost:7207/Valuutta';
  //         axios.get(url).then((response)=>{
  //           SetAllRates(response.data);
            
  //         });   
  //       };
 

    function rateWrapper(rate, amount){
      console.log(fetchData())
      NewRate(2)
      result(rate,amount)
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
              <div className="rates">
                <Ratebutton NewRate={passer} />
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

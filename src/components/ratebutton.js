
   import axios from "axios";
   import { useEffect, useState } from "react";


   
   function Ratebutton(props){
       //kaikkien nappuloiden renderöinti tapahtuu tässä elementissä

       let rateButtonAmount
       useEffect(()=>{
            const getRateButtons= async()=>{
              const url = 'https://localhost:7207/Valuutta';
              const response = await axios.get(url);
              rateButtonAmount = response.data

            }
              try{ getRateButtons()
              }
              catch(error){
                  console.error(error)
                }
                
            },[]);
            
            console.log(rateButtonAmount)
     
    return (
        <button type="button" className="btn btn-info" onClick={props.onClick}>GBP</button>
    );
}
export default Ratebutton;
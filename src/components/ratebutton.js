import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



   
   function Ratebutton(props){
       //kaikkien nappuloiden renderöinti tapahtuu tässä elementissä

       const [rates, setRates]= useState({});
       const [isLoading, setLoading]= useState(true);

       useEffect(()=>{
        getRateButtons();
       })
             function getRateButtons(){
              const url = 'https://localhost:7207/Valuutta';
              axios.get(url).then((response)=>{
                setRates(response.data);
                setLoading(false);
              });   
            };
               
    
       if (isLoading){
        return(
            <div>Loading...</div>
        )
       }
       return(
        <div>
            {rates.map(rates=>
             <button type="button" className="btn btn-info" onClick={props.onClick}>{rates.currency}</button>
                )}
            </div>
       );
    
}
export default Ratebutton;
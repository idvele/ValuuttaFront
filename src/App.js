import { useState } from "react";
import Rate from "./Rate"



function App() {
  
 
  return (
    <div className="App">
     <Rate currency="markka" rate="4"></Rate>
     <Rate currency="markka" rate="4"></Rate>
     <Rate currency="markka" rate="4"></Rate>
    </div>
  );
}

export default App;

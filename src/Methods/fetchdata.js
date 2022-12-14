import axios from 'axios';
//Saako axioksella tehtyä parametrisiä get-hakuja?

async function fetchData() {
  const url = 'https://localhost:7207/Valuutta/GBP';
try{
  const response = await axios.get(url);
  console.log(response.data.rate);
  return response.data.rate
} 
catch (error) {
  console.error(error);
}
}
    
    export default fetchData;
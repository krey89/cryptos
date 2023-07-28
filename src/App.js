import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import CryptoDetail from './CryptoDetail';
import CryptoMain from './CryptoMain';
import defaultCoins from './DefaultCoins';

// Use this API
// https://api2.binance.com/api/v3/ticker/24hr
// https://binance.us/api/v3/ticker/24hr


export default function App() {

  const [coinData, setCoinData] = useState([]);
  const [fullCoinData, setFullCoinData] = useState([]);

  useEffect(() => {

      let session = sessionStorage.getItem("coins");

      console.log("fetching...");
      fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
         const filteredData = data.data.filter((ticker) => {
          if (defaultCoins.includes(ticker.id)) {
            return true;
          }
          return false;
        }); 
        // console.log(filteredData);
        setFullCoinData(data.data);

        if(!session){
          sessionStorage.setItem("coins",defaultCoins);
          setCoinData(filteredData);

        }else{
          const sessionCoins = data.data.filter((ticker) => {
            if (session.includes(ticker.id)) {
              return true;
            }
            return false;
          }); 
        setCoinData(sessionCoins);
        }

      });

  }, []);

  //console.log({ coinData });  



  return (
    <div className="App">


    <Routes>
      <Route path="/" element={<CryptoMain coinData={coinData} fullCoinData={fullCoinData} setCoinData={setCoinData}/>} />
      <Route path="/:id" element={<CryptoDetail coinData={coinData} fullCoinData={fullCoinData} setCoinData={setCoinData}/>} />  
    </Routes>   


    </div>




  );
}
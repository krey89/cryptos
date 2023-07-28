import logo from './logo.svg';
import './App.css';
import { useParams } from "react-router-dom";
import TopNav from './TopNav';


export default function CryptoDetail({coinData, fullCoinData,setCoinData}) {

    let { id } = useParams();

    const arr = {coinData}.coinData;
    let selectedCoin = {};

    for(let coin of arr){
        if(coin.id === id){
            selectedCoin = coin;
        }
}

let format = (value,decimals) => Number(value).toLocaleString("en-US",{minimumFractionDigits: decimals, maximumFractionDigits: decimals});

return(
<>
    <TopNav coinData={coinData} fullCoinData={fullCoinData} setCoinData={setCoinData}/>

      <div className="main-content">
         <h1>{selectedCoin.name}: {selectedCoin.symbol}</h1>
         <hr/>
         <h3>Current Price: ${format(selectedCoin.priceUsd,2)}</h3>
         <h3>Market Cap: ${format(selectedCoin.marketCapUsd,2)}</h3>
         <h3>Volume-Weighted Average Price (VWAP): ${format(selectedCoin.vwap24Hr,2)}</h3>
         <h3>Volume 24 Hours: ${format(selectedCoin.volumeUsd24Hr,2)}</h3>
         <h3>Supply: {format(selectedCoin.supply,0)}</h3>
         <h3>Max Supply: {selectedCoin.maxSupply == null ? '∞' :format(selectedCoin.maxSupply,0)}</h3>
        </div>

        <div className="bottom-logo-ctr">
          <img id='footer-logo' src={logo} className="App-logo" alt="logo"/>
        </div>  

</>
)

}
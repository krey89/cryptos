import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import TopNav from './TopNav';


export default function CryptoMain({coinData, fullCoinData,setCoinData}) {
    return(
    <>
      <TopNav coinData={coinData} fullCoinData={fullCoinData} setCoinData={setCoinData}/>

      <div className="main-content">
        <h2>Today's cryptocurrency prices</h2>
        <table>
          <thead style={{borderBottom:'1px solid aqua' }}>
            <tr>
              {/* <th>#</th> */}
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>24h %</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {coinData.map((coin, i) => {
              return (
                <tr key={coin.id}>
                  {/* <td>{i + 1}</td> */}
                  <td><Link style={{color:"aqua", textDecoration:"none", fontWeight: 'bold'}} to={`/${coin.id}`} className='coinLink'>{coin.name}</Link></td>
                  <td style={{fontWeight: 'bold'}}>{coin.symbol}</td>
                  <td>${Number(coin.priceUsd).toLocaleString("en-US",{minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                  <td
                    style={
                      Number(coin.changePercent24Hr) > 0
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    {Number(coin.changePercent24Hr) > 0 ? "▲" : "▼"}
                    {Number(coin.changePercent24Hr).toFixed(2)}%
                  </td>
                  <td> <a style={{color:"aqua", textDecoration:"none"}} href={coin.explorer} target="_blank" rel="noreferrer">{coin.explorer}</a> </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="bottom-logo-ctr">
          <img id='footer-logo' src={logo} className="App-logo" alt="logo"/>
        </div>     
      
      </div>   

  

    </>
    
    
    )
    
    }
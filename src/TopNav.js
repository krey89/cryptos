import {Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AddCoin from "./AddCoin";

export default function TopNav({coinData,fullCoinData,setCoinData}) {

return(<>
<nav>
    <Link className="home" style={{background:"blue"}} to={`/`}>
        <img id="nav-logo" src={logo} className="App-logo" alt="logo"/>            
    </Link>        
    <AddCoin coinData={coinData} fullCoinData={fullCoinData} setCoinData={setCoinData}/>
</nav>

</>)

}


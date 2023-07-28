import React, {useState} from 'react'


export default function AddCoin({coinData,fullCoinData,setCoinData}){

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

  function findCoin(input){
    console.log('session data');
    let coins = sessionStorage.getItem('coins');
    console.log(coins);
    setSearchInput('');
    let match = null;
    let isListed = false;
    //console.log(coinData);

    for(let coin of fullCoinData){
      if((input.toUpperCase() === coin.name.toUpperCase()) ||(input.toUpperCase() === coin.symbol.toUpperCase())){
        match = coin;
      }
    }

    if(match == null){
      alert("Not found")
    }
    else{

      let newDefaultCoins = [];
      let sessionCoins = [];
  
      newDefaultCoins = fullCoinData.filter((coin) => {
        if(coins.includes(coin.id)){
          return true;
        }
        return false;
      });

      for(let defCoin of newDefaultCoins){
         if(defCoin.id === match.id){
          isListed = true;
          alert(match.name+" is already listed")          
        }
      }

      if(isListed === false){
        alert(match.name+" has been added")          
        newDefaultCoins.push(match);
        setCoinData(newDefaultCoins);
        for(let cn of newDefaultCoins){
          sessionCoins.push(cn.id);
        }   
        sessionStorage.setItem('coins',sessionCoins);
      }

    }
  }

return( 
<div className='addCoin'>

  <input
   type="search"
   placeholder="Search by Name or Symbol"
   value={searchInput} 
   onChange={handleChange}
   />
   
   <button onClick={() => findCoin(searchInput)}>
    Find Coin
   </button>

   </div>
   )
}

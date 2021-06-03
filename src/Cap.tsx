
import React,{useState,useEffect} from 'react';
import './App.css';
import { LastUpdate } from './LastUpdate';

interface Data
  {
    "mimir//CHURNINTERVAL": number,
    "mimir//FULLIMPLOSSPROTECTIONBLOCKS": number,
    "mimir//FUNDMIGRATIONINTERVAL": number,
    "mimir//MAXIMUMLIQUIDITYRUNE": number,
    "mimir//MINIMUMBONDINRUNE": number,
    "mimir//MINRUNEPOOLDEPTH": number,
    "mimir//OBSERVATIONDELAYFLEXIBILITY": number,
    "mimir//POOLCYCLE": number
  }

function Cap() {
  const init = new Date();
  const [date, setDate] = useState(init)
    const [data ,setData]=useState<Data>({
    "mimir//CHURNINTERVAL": 288000,
    "mimir//FULLIMPLOSSPROTECTIONBLOCKS": 0,
    "mimir//FUNDMIGRATIONINTERVAL": 0,
    "mimir//MAXIMUMLIQUIDITYRUNE": 0,
    "mimir//MINIMUMBONDINRUNE": 3000000000000,
    "mimir//MINRUNEPOOLDEPTH": 1000000000000,
    "mimir//OBSERVATIONDELAYFLEXIBILITY": 20,
    "mimir//POOLCYCLE": 14400
  });
  const getData=()=>{
    fetch('https://thornode.thorchain.info/thorchain/mimir'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
       
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  useEffect(()=>{
    
    setDate(new Date());
    getData();
    const interval=setInterval(()=>{
      getData()
      setDate(new Date()); 
     },10000)
       
       
     return()=>clearInterval(interval)
},[])
let cap = data['mimir//MAXIMUMLIQUIDITYRUNE']/ (10 ** 8);
  return (
    <div className="App">
     
       {cap  > 3700000? <h1> Caps may have been raised! Check here <a href='https://twitter.com/THORChain'>THORChain Twitter</a> <br></br>New Cap: {cap}</h1> : <div><h1>Max Rune: {cap}</h1> <p>Do not attempt to add liquidity.</p></div>}
      <LastUpdate update={date}></LastUpdate>

    </div>
  );
}

export default Cap;

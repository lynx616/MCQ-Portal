import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QuestionCard from './components/QuestionCard';
function App() {
  const [apiData, setapiData] = useState([]);
  const [saveData, setsaveData] = useState([]);

useEffect(()=>{
  apiCall();
},[]);

  async function apiCall(){
    const res=await axios.get('http://localhost:4000/data');
    setapiData(res.data);
  }
  const showres=()=>{
    console.log("final response",saveData);
  }

  return (
    <>
    {apiData.map((itemData,index)=>{
      
      return (<QuestionCard key={index} resData={itemData} saveData={saveData} setsaveData={setsaveData}/> )
      
    })}
    <div className="btn">
            <button onClick={()=> showres()}>SUBMIT</button>
        </div>
    </>
  )
}

export default App

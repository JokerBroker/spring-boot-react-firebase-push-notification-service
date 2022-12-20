import './App.css';
import React, {useState,useEffect} from 'react';
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import Axios from 'axios'
function App() {
  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);
  const [stockName,setStockName]=useState('')
  const [tokenId,setTokenId] = useState('')

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "",
      });
      console.log("Token Gen", token);
      setTokenId(token)
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  

  const submitReview = ()=>{
    Axios.post('http://localhost:3001/api/insert',{stockname:stockName,token:tokenId}).then(()=>{
      alert('sucessful insert');
    })
  };
  return (
    <div className="App">
      <h1>Stock App</h1>
      <div className='form'>
        <label>Stock Name</label>
      <input type='text' name='stockname' onChange={(e)=>{
        setStockName(e.target.value)
      }}/>
       
      <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default App;

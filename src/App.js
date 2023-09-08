import React,{useEffect, useState} from 'react';
import Sentiment from 'sentiment';
import './App.css';

function App() {

  const sentiment = new Sentiment();
  const[input,setInput] = useState('');
  const[result,setResult] = useState('');

  useEffect(()=>{
    const tempResult = sentiment.analyze(input);
    setResult(tempResult);
    console.log(tempResult)
  },[input])

    if(result.score === 0)
    {
      document.getElementById('neutral').classList.add('shine');
      document.getElementById('sad').classList.remove('shine');
      document.getElementById('sadder').classList.remove('shine');
      document.getElementById('happy').classList.remove('shine');
      document.getElementById('happier').classList.remove('shine');
    }

    else if(result.score < 0 && result.score >=-3)
    {
      document.getElementById('sad').classList.add('shine');
      document.getElementById('neutral').classList.remove('shine');
      document.getElementById('sadder').classList.remove('shine');
      document.getElementById('happy').classList.remove('shine');
      document.getElementById('happier').classList.remove('shine');
    } 
    
    else if(result.score < -3)
    {
      document.getElementById('sadder').classList.add('shine');
      document.getElementById('sad').classList.remove('shine');
      document.getElementById('neutral').classList.remove('shine');
      document.getElementById('happy').classList.remove('shine');
      document.getElementById('happier').classList.remove('shine');
    }
    
    else if(result.score > 0 && result.score <=3)
    {
      document.getElementById('happy').classList.add('shine');
      document.getElementById('sad').classList.remove('shine');
      document.getElementById('sadder').classList.remove('shine');
      document.getElementById('neutral').classList.remove('shine');
      document.getElementById('happier').classList.remove('shine');
    }

    else if(result.score > 3)
    {
      document.getElementById('happier').classList.add('shine');
      document.getElementById('sad').classList.remove('shine');
      document.getElementById('sadder').classList.remove('shine');
      document.getElementById('neutral').classList.remove('shine');
      document.getElementById('happy').classList.remove('shine');
    }
  

  return (
    <>
    <div className='App'>
      <h2>Sentiment Analysis</h2>
      <div className='form'>
      <input type='text' placeholder='Enter text here ...' value={input} onChange={(e)=>setInput(e.target.value)}/>

      <div className='emojis'>
      <span id='sadder'>😞</span>
        <span id='sad'>☹️</span>
        <span id='neutral'>😐</span>
        <span id='happy'>🙂</span>
        <span id='happier'>😃</span>
      </div>

      <span>{result.score}</span>
      </div>
    </div>
    </>
  );
}

export default App;

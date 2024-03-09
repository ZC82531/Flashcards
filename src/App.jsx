import './App.css';
import Flashcard from './flashcard';
import { useState } from 'react';

const App = () => {

  const [currentIndex, setIndex] = useState(0);
  const [currentState, setState] = useState(false);
  
  function increaseIndex() {
    if (currentIndex<49){
      setState(false);
      setIndex(currentIndex+1);
    }
  }
  function decreaseIndex() {
    if (currentIndex>0){
      setState(false);
      setIndex(currentIndex-1);
    }
  }

  function setCondition() {
    setState(!currentState);
  }

  return (
    <div className="App">
      <div>
        <h1>
          All the State Capitals!
        </h1>
        <p>
          How well do you know all of the state capitals in the US?
        </p>
        <p>Number of cards: 50</p>
      </div>
      <div onClick={setCondition}>
      <Flashcard side={currentState} index={currentIndex} />
      </div>
    
      <button onClick={decreaseIndex}>Prev</button>
      <button onClick={increaseIndex}>Next</button>
    </div>
  )
}

export default App
import './flashcard.css';
import capitals from './capitals.json'

const Flashcard = (props) => {

    const element = capitals[props.index];

    return (
    <div className={`flashcard ${props.side ? 'flipped' : ''}`}>
        <div className="front">
            <h1>State: {element.state}</h1>
        </div>
        <div className="back">
            <p>The capital of {element.state} is {element.capital}</p>
        </div>
    </div>
  )
}

export default Flashcard
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const buttonClicked = (value) => {
    if (value=='AC') {
      setInput('');
    } else if(value=='DEL') {
      setInput(input.slice(0, -1));
    } else if (value=='=') {
      setInput(eval(input));
    } else {
      setInput(input+value); 
    }
  };

  return (
    <>
      <div className='calculator'>
        <p style={{margin:'-3% auto 2%', color:'black', fontWeight:'900'}}>Calculator</p>
        <input type="text" value={input} readOnly placeholder="0" />
        <div>
          <button className='num' id='ac' onClick={() => buttonClicked('AC')}>AC</button>
          <button className='num' id='del' onClick={() => buttonClicked('DEL')}>DEL</button>
          <button className='op' id='div' onClick={() => buttonClicked('/')}>/</button>
        </div>
        <div>
          <button className='num' id='num7' onClick={() => buttonClicked('7')}>7</button>
          <button className='num' id='num8' onClick={() => buttonClicked('8')}>8</button>
          <button className='num' id='num9' onClick={() => buttonClicked('9')}>9</button>
          <button className='op' id='mul' onClick={() => buttonClicked('*')}>*</button>
        </div>
        <div>
          <button className='num' id='num4' onClick={() => buttonClicked('4')}>4</button>
          <button className='num' id='num5' onClick={() => buttonClicked('5')}>5</button>
          <button className='num' id='num6' onClick={() => buttonClicked('6')}>6</button>
          <button className='op' id='add' onClick={() => buttonClicked('+')}>+</button>
        </div>
        <div>
          <button className='num' id='num1' onClick={() => buttonClicked('1')}>1</button>
          <button className='num' id='num2' onClick={() => buttonClicked('2')}>2</button>
          <button className='num' id='num3' onClick={() => buttonClicked('3')}>3</button>
          <button id='sub' className='op' onClick={() => buttonClicked('-')}>-</button>
        </div>
        <div>
          <button className='num' id='num0' onClick={() => buttonClicked('0')}>0</button>
          <button className='num' id='dec' onClick={() => buttonClicked('.')}>.</button>
          <button className='num' id='eq' onClick={() => buttonClicked('=')}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "../styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(1000);
  const [min, setMin] = useState(0);
  const [input, setInput] = useState(0);
  const [startCounter, setstartCounter] = useState(0);
  const [error, setError] = useState(0);

  const Increment = () => {
    if (count !== max) {
      setCount(count + 1);
      setInput(0);
      setError(0);
    }
  };

  const Decrement = () => {
    if (count !== min) {
      setCount(count - 1);
      setInput(0);
      setError(0);
    }
  };

  const Start = () => {
    setCount(min);
    setstartCounter(1);
  };

  const SetValue = (e) => {
      if(Number(e.target.value)<=max && Number(e.target.value) >= min){
        setCount(Number(e.target.value));
        setError(0);
      }
      else{
        setError(1);
      }
  }

  return (
    <div>
      {startCounter === 0 && (
        <div className="initial" >
          <div className="initialValue" >
            Counter Initial Value:
            <input type="number" value={min} className="numInput" onChange={(e) => {
            setMin(Number(e.target.value));
          }}></input>
          </div>
          <div className="initialValue" >
            Counter Max Value:
            <input type="number" value={max} className="numInput" onChange={(e) => {
            setMax(Number(e.target.value));
          }}></input>
          </div>
          <div>
          <button onClick={Start} className="startBtn counterInc">Start Counter</button>
          </div>
        </div>
      )}
      {startCounter === 1 && (
        <div>
        <div className="counter">
          <div onClick={Decrement} className="counterSub counterDec">
            -
          </div>
          { input === 0 &&
          <div className="counterSub counterCount" onDoubleClick={() => {
              setInput(1);
          } }>{count}</div>
        }
        { input === 1 && 
            <div>
                <input className="counterSub counterCount counterInput" type="number" value={count} onChange={(e)=>{
                    SetValue(e);
                }}></input>
            </div>
        }
          <div onClick={Increment} className="counterSub counterInc">
            +
          </div>
        </div>
        <div className="message">*Double click the number to input a number of your choice. </div>
        {error === 1 && <div className="errorMessage">Please input value between {min} & {max}!</div>}
        </div>
      )}
    </div>
  );
};

export default Counter;

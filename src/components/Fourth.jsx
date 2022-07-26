import React, { useState } from 'react';
import FourthImage from '../Image/4.png';

function Fourth() {
  const [count, setCount] = useState(0);
  return (
    <div className="boxEntry">
      <div className="codeSetion">
        <img src={FourthImage} alt="" />
      </div>
      <div className="functionSec">
        <h1>
          Count is <span>{count}</span>
        </h1>
        <div>
          <button onClick={() => setCount((count) => count - 1)}>Subs -</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount((count) => count + 1)}>Add +</button>
        </div>
      </div>
    </div>
  );
}

export default Fourth;

import React, { useState } from 'react';
import FirstImage from '../Image/1.png';

function First() {
  const [age, setAge] = useState(0);
  let incAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="boxEntry">
      <div className="codeSetion">
        <img src={FirstImage} alt="" />
      </div>
      <div className="functionSec">
        <h1>
          Today I am <span>{age}</span> years of age!
        </h1>
        <button onClick={incAge}>Get Older</button>
      </div>
    </div>
  );
}

export default First;

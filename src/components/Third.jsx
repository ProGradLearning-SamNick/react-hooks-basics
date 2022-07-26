import React, { useState } from 'react';
import ThirdImage from '../Image/3.png';

function Third() {
  const [state, setstate] = useState({ age: 19, siblings: 4 });
  const { age, siblings } = state;
  let handlerChange = (e) => {
    setstate({ ...state, [e.target.name]: parseInt(state[e.target.name]) + 1 });
  };
  return (
    <div className="boxEntry">
      <div className="codeSetion">
        <img src={ThirdImage} alt="" />
      </div>
      <div className="functionSec">
        <h1>
          I am <span>{age}</span> years old.
        </h1>
        <h1>
          I have <span>{siblings}</span> siblings!
        </h1>
        <div>
          <button onClick={handlerChange} name="age">
            Get older
          </button>
          <button onClick={handlerChange} name="siblings">
            Get more siblings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Third;

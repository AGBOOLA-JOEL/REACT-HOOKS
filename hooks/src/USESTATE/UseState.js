import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState(0);
  const [input, setInput] = useState("pedro");
  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        +
      </button>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(state - 1);
        }}
      >
        {" "}
        -
      </button>
      <hr />
      <input
        type="text"
        placeholder="type something here"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />{" "}
      {input}
    </div>
  );
};

export default UseState;

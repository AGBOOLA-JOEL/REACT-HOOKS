import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, show: state.show };
    case "toggletext":
      return { count: state.count, show: !state.show };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, show: false });

  const handleCLick = () => {
    dispatch({ type: "toggletext" });
  };
  return (
    <div>



      <p>{state.count}</p>
      <br />
      <button onClick={handleCLick}>click me</button>
      {state.show && <p>This is the text to be shown</p>}
    </div>
  );
};

export default UseReducer;

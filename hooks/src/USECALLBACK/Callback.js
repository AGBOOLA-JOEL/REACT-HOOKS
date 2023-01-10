import { useCallback, useState } from "react";
import Child from "./Child";

const Callback = () => {
  const [data, setData] = useState("Yo please sub my channel");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(() => {
    return data;
  },[data]);

  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <p>toggle</p>}
    </div>
  );
};

export default Callback;

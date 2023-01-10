import { useEffect, useState } from "react";

import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[0].email);
      console.log("Api was called");
    });
  }, [count]);

  return (
    <div>
      <p>HELLO WORLD!!!</p>
      <hr />
      <p>{data}</p>
      {count}
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        click me!!!
      </button>
    </div>
  );
};

export default UseEffect;

import { useEffect, useLayoutEffect, useRef } from "react";

// useLayout runs before useEffect
const UseLayout = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div>
      <input type="text" value="PEDRO" ref={inputRef} />
    </div>
  );
};

export default UseLayout;

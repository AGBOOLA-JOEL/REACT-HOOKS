import Button from "./Button";
import { useRef } from "react";

const Imperative = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.altToggle();
        }}
      >
        Button from parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default Imperative;

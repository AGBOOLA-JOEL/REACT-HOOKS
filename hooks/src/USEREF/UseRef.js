import { useRef}  from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // inputRef.current.focus();
    inputRef.current.value=""
  };

  return (
    <div>
      <h1>JOEME</h1>
      <input type="text" placeholder="type something...." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default UseRef;

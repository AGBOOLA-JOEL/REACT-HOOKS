import { useContext } from "react";
import { AppContext } from "./UseContext";

const Login = () => {
  const { setUser } = useContext(AppContext);

  const handleChange = (e) => {
    const change = e.target.value;
    setUser(change);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Login;

import Login from "./Login";
import User from "./User";
import { createContext, useState } from "react";

export const AppContext = createContext(null);
const UseContext = () => {
  const [username, setUser] = useState("");

  return (
    <AppContext.Provider value={{ username, setUser }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default UseContext;

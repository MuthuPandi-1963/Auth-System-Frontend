import axios from "axios";
import { createContext, useState } from "react";

// Create the context
 const AppContext = createContext();

// Context Provider component
export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/auth/profile`);
      if (data.success) {
        setUserData(data.userdata);
      } else {
        alert(data.error || "Failed to fetch user data.");
      }
    } catch (err) {
      alert(err?.message || "An error occurred while fetching user data.");
    }
  };

  const value = {
    backendUrl,
    isLogged,
    setIsLogged,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

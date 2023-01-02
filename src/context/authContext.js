import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [error, setError] = useState({ isError: false, message: "" });

  const login = (username) => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: username,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  const errorMessage = (message) => {
    setError({ ...error, isError: true, message });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    if (error.isError) {
      setTimeout(() => setError({ isError: false, message: "" }), 3000);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ currentUser, login, error, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

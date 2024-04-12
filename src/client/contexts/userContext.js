//userContext.js
import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');


  const logout = () => {
    setSigned(false);
    setName(''); 
  };


  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        logout
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName, logout } = context;
  return { signed, setSigned, name, setName, logout };
}
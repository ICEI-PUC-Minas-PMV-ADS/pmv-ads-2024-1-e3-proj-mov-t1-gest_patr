// userContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [id, setId] = useState(''); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const logout = () => {
    setSigned(false);
    setId(''); 
    setName('');
    setEmail('');
  };

  // Log user data whenever it changes
  useEffect(() => {
    console.log("User Data:", { signed, id, name, email });
  }, [signed, id, name, email]);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        email,
        setEmail,
        id,
        setId,
        password, 
        setPassword, 
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  const { signed, setSigned, id, setId, name, setName, email, setEmail, password, setPassword, logout } = context;
  return { signed, setSigned, id, setId, name, setName, email, setEmail, password, setPassword, logout };
}
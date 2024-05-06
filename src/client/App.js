// app.js
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './contexts/userContext';

import Route from './navigation/route'

function App() {
  
  return (
    <UserProvider>
        <NavigationContainer>
          <Route/>
        </NavigationContainer>
    </UserProvider>
  ); 
}

export default App;

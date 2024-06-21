// app.js
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/userContext';

import Route from './src/navigation/Route'

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

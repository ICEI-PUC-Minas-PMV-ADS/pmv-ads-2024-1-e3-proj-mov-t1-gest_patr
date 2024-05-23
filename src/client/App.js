// app.js
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './contexts/userContext';

import Route from './navigation/Route'

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

import React from "react";
import { Provider as PaperProvider } from "react-native-paper"; // Import PaperProvider
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import HomePage from "./pages/homePage"; 

function App() {
  return (
    <SafeAreaProvider> 
      <PaperProvider> {/* Wrap your app with PaperProvider */}
        <HomePage /> 
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;

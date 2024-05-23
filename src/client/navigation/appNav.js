// appNav.js
import { Provider as PaperProvider } from "react-native-paper"; 
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import { DrawerContent } from "../components/DrawerContent"; 
import HomePage from "../screens/Home";
import GoodsPage from "../screens/Goods";
import SectorPage from "../screens/Sector";
import DashboardPage from "../screens/Dashboard";
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewGoodPage from "../screens/NewGood";
import ProfilePage from "../screens/Profile"



const Drawer = createDrawerNavigator();

function AppNav() {
  

  function HomeScreen() {
    return (
      <SafeAreaProvider> 
        <PaperProvider> 
          <View style={styles.body}>
            <HomePage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }

 function ProfileScreen() {
    return (
      <SafeAreaProvider> 
        <PaperProvider> 
          <View style={styles.body}>
            <ProfilePage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }

  function GoodsScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={styles.body}>
            <GoodsPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }

  function NewGoodScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={styles.body}>
            <NewGoodPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }

  
  function SectorScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={styles.body}>
            <SectorPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }

  function DashboardScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={styles.body}>
            <DashboardPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }

 

  return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} >
        <Drawer.Screen name="Gestão Patrimonial" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Bens" component={GoodsScreen} />
        <Drawer.Screen name="Novo Bem" component={NewGoodScreen} />
        <Drawer.Screen name="Setor" component={SectorScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      </Drawer.Navigator>
  );
  
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export default AppNav;
import {NavigationContainer} from '@react-navigation/native'; 
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Perfil">
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Configurações" component={Settings} />
        <Drawer.Screen name="Cadastro de Bens" component={Assets} />
        <Drawer.Screen name="Busca de Bens" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

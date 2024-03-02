import React, { useState, useRef } from "react";
import { StyleSheet, View, SafeAreaView, Text, Modal, Image } from "react-native";
import { Button } from "react-native-paper";
import SideMenu from '../components/SideMenu';
import logo2 from '../logo2.png'
import SearchBar from "../components/SearchBar";
import AppBar from "../components/AppBar";

const HomePage = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [data, setData] = React.useState(null);
  const anchorRef = useRef(null);

  React.useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const openMenu = () => { 
    setMenuVisible(true);
  };


  return (
    <View style={styles.container}>
      <AppBar  openMenu={openMenu}/>
      <SafeAreaView style={styles.content}>
        <View ref={anchorRef}>
          <View style={styles.container}>
        <Image source={logo2} style={styles.logo} className="App-logo" alt="logo" />
</View>
          <View style={styles.content}>
            <Text style={styles.title}>Bem-vindo ao Controle de Patrimônio</Text>
            <View style={styles.content}>
            <p>{!data ? "Loading..." : data}</p>            
          </View>
          </View>
          <View style={styles.fixToText}>
            <Button 
              theme={{colors: {primary:"gold"}}}
              icon="plus" 
              mode="contained" 
              onPress={() => {}}>
              Cadastrar
            </Button>
            <Button
              theme={{colors: {primary:"gold"}}}
              icon="search-web"
              mode="contained"
              title="Right button"
              onPress={toggleSearch}>
              Buscar
            </Button>
          </View>
        </View>

        <Modal
          visible={searchVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleSearch}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <SearchBar/>
              <Button onPress={toggleSearch}>Fechar</Button>
            </View>
          </View>
        </Modal>

      
        <Modal
        visible={menuVisible}
        animationType='slide'
        transparent={true}
        onRequestClose={toggleMenu}>
        <SideMenu visible={menuVisible} closeMenu={closeMenu} anchor={anchorRef.current} /> 
      </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 6,
    backgroundColor: "white",
    color: "black",
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  content: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
  modalContent: {
    backgroundColor: "gold",
    padding: 30,
    borderRadius: 5,
    marginHorizontal: 5,
    elevation: 5,
  },
  logo: {
    marginLeft: 105,
    width: 100,
    height: 100,
  },
});

export default HomePage;

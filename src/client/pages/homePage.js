import React, { useState, useRef } from "react";
import { StyleSheet, View, SafeAreaView, Text, Modal, Image } from "react-native";
import { Button } from "react-native-paper";
import logo from '../logo.png'
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const anchorRef = useRef(null);


  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View ref={anchorRef}>
          <View style={styles.container}>
        <Image source={logo} style={styles.logo} className="App-logo" alt="logo" />
</View>
          <View style={styles.content}>
            <Text style={styles.title}>Bem-vindo ao Controle de Patrimônio</Text>
          </View>
          <View style={styles.fixToText}>
            <Button 
              theme={{colors: {primary:"#6d85db"}}}
              icon="plus" 
              mode="contained" 
              onPress={() => {}}>
              Cadastrar
            </Button>
            <Button
              theme={{colors: {primary:"#6d85db"}}}
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
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#98a9e8",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 6,
    backgroundColor: "#c6d0f5",
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
    backgroundColor: "white",
  },
  modalContent: {
    backgroundColor: "#98a9e8",
    padding: 30,
    borderRadius: 5,
    marginHorizontal: 5,
    elevation: 5,
  },
  logo: {
    marginLeft: 90,
    width: 150,
    height: 150,
  },
});

export default HomePage;

//homePage.js
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import logo from "../logo.png";
import SearchBar from "../components/SearchBar";
// import QRCodeScanner from "../components/Qrcode";
import GoodsCard from "../components/Cards";
import NewGoodPage from "./newGoodsPage";

const HomePage = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [qrCodeScannerVisible, setQRCodeScannerVisible] = useState(false);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const anchorRef = useRef(null);

  const onSearch = (filteredGoods) => {
    setSearchResults(filteredGoods);
    setSearchResultsVisible(true);
    console.log(filteredGoods);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setSearchResults([]);
    }
  };
  const toggleQRCodeScanner = () => {
    setQRCodeScannerVisible(!qrCodeScannerVisible);
  };

  const toggleSearchResults = () => {
    setSearchResultsVisible(!searchResultsVisible);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View ref={anchorRef}>
          <View style={styles.container}>
            <Image
              source={logo}
              style={styles.logo}
              className="App-logo"
              alt="logo"
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Bem vindo ao app de gestão de patrimônio</Text>
          </View>
          <View style={styles.fixToText}>
            <Button
              theme={{ colors: { primary: "#6d85db" } }}
              icon="plus"
              mode="contained-tonal"
              onPress={toggleQRCodeScanner}
            >
              Cadastrar
            </Button>
            <Button
              theme={{ colors: { primary: "#6d85db" } }}
              icon="search-web"
              mode="contained-tonal"
              title="Right button"
              onPress={toggleSearch}
            >
              Buscar
            </Button>
          </View>
        </View>

        {/* Search modal */}
        <Modal
          visible={searchVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleSearch}
        >
          <ScrollView style={styles.scrollView}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <SearchBar onSearch={onSearch} />

                {/* Display search results */}
                {searchResults.map((item, index) => (
                  <GoodsCard
                    key={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    sector={item.sector}
                    date_purchase={item.date_purchase}
                    brand={item.brand}
                    purchase_site={item.purchase_site}
                    warranty={item.warranty}
                    fetchGoods={() => {}}
                  />
                ))}
                <Button onPress={toggleSearch}>Fechar</Button>
              </View>
            </View>
          </ScrollView>
        </Modal>

        {/* QRCodeScanner modal */}
        <Modal
          visible={qrCodeScannerVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleQRCodeScanner}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <NewGoodPage/>
              <Button onPress={toggleQRCodeScanner}>Fechar</Button>
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
    margin: 5,
    elevation: 5,
  },
  searchResultsContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    marginLeft: 90,
    marginBottom: 30,
    width: 150,
    height: 150,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 0,
    minHeight: "100%",
  },
});

export default HomePage;
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Modal, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import logo from '../assets/logo.png';
import CustomSearchBar from '../components/Searchbar';
import GoodsCard from '../components/Cards';
import NewGoodPage from './NewGood';
import { getGoods } from '../services/goodServices';

const HomePage = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [qrCodeScannerVisible, setQRCodeScannerVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [goodsData, setGoodsData] = useState([]);

  const fetchGoodsData = async () => {
    try {
      const data = await getGoods();
      setGoodsData(data);
    } catch (error) {
      console.error('Error fetching goods data:', error);
    }
  };

  const onSearch = (filteredGoods) => {
    setSearchResults(filteredGoods);
    setSearchResultsVisible(true);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setSearchResults([]);
    }
  };

  const toggleQRCodeScanner = () => {
    setQRCodeScannerVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Bem vindo ao app de gestão de patrimônio</Text>
      </View>
      <View style={styles.fixToText}>
        <Button
          theme={{ colors: { primary: '#6d85db' } }}
          icon="plus"
          mode="contained-tonal"
          onPress={toggleQRCodeScanner}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Button>
        <Button
          theme={{ colors: { primary: '#6d85db' } }}
          icon="search-web"
          mode="contained-tonal"
          onPress={toggleSearch}
        >
          <Text style={styles.buttonText}>Buscar</Text>
        </Button>
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
              <CustomSearchBar onSearch={onSearch} />

              {/* Display search results */}
              {searchResultsVisible && searchResults.length === 0 && (
                <Text>Click para buscar bem por QRCode.</Text>
              )}
              {searchResults.map((item, index) => (
                <GoodsCard
                  key={index}
                  id={item.id}
                  qrcode={item.qrcode}
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
        onRequestClose={() => setQRCodeScannerVisible(false)}
      >
        <View style={styles.modalContent}>
          <NewGoodPage/>
          <Button onPress={() => setQRCodeScannerVisible(false)}>
            <Text style={styles.buttonText}>Fechar</Text>
          </Button>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 8,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#c6d0f5',
    color: 'black',
    margin: 10,
    borderRadius: 5,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 2,
    marginVertical: 10,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#98a9e8',
    padding: 10,
    borderRadius: 5,
    marginTop: 60,
    elevation: 5,
  },
  logo: {
    marginBottom: 30,
    width: 150,
    height: 150,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    minHeight: '100%',
  },
  buttonText: {
    color: 'black',
  },
});

export default HomePage;

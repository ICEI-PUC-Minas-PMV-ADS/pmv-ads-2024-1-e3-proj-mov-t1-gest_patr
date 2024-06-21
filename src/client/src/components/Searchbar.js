import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getGoods } from '../services/goodServices';

const CustomSearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [goodsData, setGoodsData] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    // Fetch goods data when component mounts
    fetchGoodsData();
  }, []);

  const fetchGoodsData = async () => {
    try {
      const data = await getGoods();
      setGoodsData(data);
    } catch (error) {
      console.error('Error fetching goods data:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // If search query is empty, reset search results
      onSearch([]);
      return;
    }

    // Check if the search query is a valid QR code
    const qrCodeRegex = /^\d+$/;
    if (qrCodeRegex.test(searchQuery)) {
      // Search by QR code
      const filteredGoods = goodsData.filter(item => item.qrcode === searchQuery);
      onSearch(filteredGoods);
    } else {
      // Search by name (case insensitive)
      const filteredGoods = goodsData.filter(
        item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      onSearch(filteredGoods);
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setSearchQuery(data);
    handleSearch();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="QRCode/Nome do bem"
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
        onSubmitEditing={handleSearch}
      />
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button title={"Click"} onPress={() => setScanned(false)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomSearchBar;

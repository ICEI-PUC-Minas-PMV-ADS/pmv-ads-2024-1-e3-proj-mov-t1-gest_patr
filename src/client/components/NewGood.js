import { useState, useEffect, useCallback } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getSectors } from '../services/sectorServices';
import { insertGoods } from '../services/goodServices';
import { Camera } from "expo-camera";
import { BarCodeScanner  } from "expo-barcode-scanner"


const NewGood = () => {
  const [data, setData] = useState({
    qrcode: '',
    date_register: '',
    name: '',
    price: '',
    sector: '',
    date_purchase: '',
    brand: '',
    purchase_site: '',
    warranty: '',
    image: '',
  });
  const currentDate = new Date().toLocaleString();
  const [sectors, setSectors] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [filteredSectors, setFilteredSectors] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params && route.params.scannedData) {
      setData((prevData) => ({
        ...prevData,
        ...route.params.scannedData
      }));
    }
  }, [route.params]);

 useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão",
        "Permissão para usar camêra",
        [
          {
            text: "OK",
            onPress: () => setHasPermission(false), 
          },
        ],
        { cancelable: false }
      );
    } else {
      setHasPermission(true);
    }
  })();
}, []);


useEffect(() => {
  const handleScanQrCode = async () => {
    if (hasPermission) {
      setScanned(true);
    } else {
      Alert.alert("Sem permissão para uso da camêra");
    }
  };

  if (scanned) {
    handleScanQrCode();
  }
}, [scanned, hasPermission]);



  useEffect(() => {
    async function fetchSectors() {
      const sectorsData = await getSectors();
      if (sectorsData) {
        setSectors(sectorsData);
      }
    }

    fetchSectors();
  }, []);

const handleSectorSearch = (text) => {
  setSearchText(text);
  const filtered = sectors.length > 0 ? sectors.filter((sector) =>
    sector.name && sector.name.toLowerCase().includes(text.toLowerCase())
  ) : [];
  setFilteredSectors(filtered);
};


const handleSelectSector = (sector) => {
    setData({ ...data, sector: sector.name });
    setSearchText('');
    setFilteredSectors([]);
  };


const handleSave = async () => {
  try {
    const response = await insertGoods({
      qrcode: scannedData || data.qrcode, 
      date_register: currentDate,
      name: data.name,
      price: data.price,
      sector: data.sector,
      date_purchase: data.date_purchase, 
      brand: data.brand,
      purchase_site: data.purchase_site,
      warranty: data.warranty,
      image: data.image,
    });
    
    if (response) {				
		alert('Bem cadastrado com sucesso!');
        navigation.navigate("Bens"); 
    } else {
      console.error('Falha ao salvar os dados');
      alert( 'Erro ao salvar bem');
    }
  } catch (error) {
    console.error('Error saving data:', error);
    alert('Erro ao salvar bem');
  }
};


const handleScanQrCode = useCallback(async () => {
  if (hasPermission) {
    setScanned(true);
  } else {
    Alert.alert("Camera permission not granted");
  }
}, [hasPermission]);


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data); 
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View style={styles.container}>
		
      <TextInput 
        style={styles.input}
        placeholder="QRCode (Código)"
        value={scannedData || data.qrcode} 
        onChangeText={(text) => setData({ ...data, qrcode: text })} 
      />
      <TextInput 
        style={styles.input}
        value={currentDate} 
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={data.name}
        onChangeText={(text) => setData({ ...data, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={data.price}
        onChangeText={(numeric) => setData({ ...data, price: numeric })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data da compra"
        value={data.date_purchase}
        onChangeText={(text) => setData({ ...data, date_purchase: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={data.brand}
        onChangeText={(text) => setData({ ...data, brand: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Local de compra"
        value={data.purchase_site}
        onChangeText={(text) => setData({ ...data, purchase_site: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Garantia"
        value={data.warranty}
        onChangeText={(text) => setData({ ...data, warranty: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={data.image}
        onChangeText={(text) => setData({ ...data, image: text })}
      />
      <TextInput
        style={[styles.input, styles.searchInput]}
        placeholder="Buscar setor"
        value={searchText}
        onChangeText={handleSectorSearch}
      />
      {searchText !== '' && (
        <View>
          {filteredSectors.map((sector) => (
            <TouchableOpacity
              key={sector.id}
              style={styles.suggestionItem}
              onPress={() => handleSelectSector(sector)}
            >
              <Text>{sector.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <View style={styles.camera}>
       <BarCodeScanner 
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      {scanned && (
        <Button title={"Escanear novamente"} onPress={() => setScanned(false)} />
      )}
      </View>
      <Button title="Salvar" onPress={handleSave} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
  },
  camera: {
    flex: 1
  }
});

export default NewGood;

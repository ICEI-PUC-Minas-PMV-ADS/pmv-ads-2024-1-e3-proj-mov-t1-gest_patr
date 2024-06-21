import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Button,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getSectors } from '../services/sectorServices';
import { insertGoods, checkIfQrCodeExists } from '../services/goodServices';
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import PhotoUpload from './PhotoUpload';
import Input from './Input';

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
    const selectedSector = sectors.find(s => s.name === data.sector);
    if (!selectedSector) {
      Alert.alert('Erro', 'Setor não existe');
      return;
    }

    const qrCodeExists = await checkIfQrCodeExists(data.qrcode);
    if (qrCodeExists) {
      Alert.alert('Erro', 'Código QR já existe no banco de dados');
      return;
    }

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
        console.log('Data saved:', response);
        Alert.alert('Sucesso', 'Bem cadastrado', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Home');
            },
          },
        ]);
      } else {
        console.error('Failed to save data');
        Alert.alert('Erro', 'Erro ao salvar bem');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      Alert.alert('Erro', 'Erro ao salvar bem');
    }
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    try {
      const qrCodeExists = await checkIfQrCodeExists(data);

      if (qrCodeExists) {
        Alert.alert('Erro', 'Código QR já existe no banco de dados');
      } else {
        setScannedData(data);
        alert(`Código  - ${data}`);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao verificar código QR');
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.camera}>
          <PhotoUpload />
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
          )}
        </View>

        <Input
          style={styles.input}
          value={scannedData || data.qrcode}
          onChangeText={async (text) => {
            setData({ ...data, qrcode: text });
            const qrCodeExists = await checkIfQrCodeExists(text);
            if (qrCodeExists) {
              Alert.alert('Erro', 'Código QR já existe no banco de dados');
            }
          }}
        />
        <Input
          style={styles.input}
          value={currentDate}
        />
        <Input
          style={styles.input}
          placeholder="Nome"
          value={data.name}
          onChangeText={(text) => setData({ ...data, name: text })}
        />
        <Input
          style={styles.input}
          placeholder="Valor"
          value={data.price}
          onChangeText={(numeric) => setData({ ...data, price: numeric })}
          keyboardType="numeric"
        />
        <Input
          style={styles.input}
          placeholder="Data da compra"
          value={data.date_purchase}
          onChangeText={(text) => setData({ ...data, date_purchase: text })}
        />
        <Input
          style={styles.input}
          placeholder="Marca"
          value={data.brand}
          onChangeText={(text) => setData({ ...data, brand: text })}
        />
        <Input
          style={styles.input}
          placeholder="Local de compra"
          value={data.purchase_site}
          onChangeText={(text) => setData({ ...data, purchase_site: text })}
        />
        <Input
          style={styles.input}
          placeholder="Garantia"
          value={data.warranty}
          onChangeText={(text) => setData({ ...data, warranty: text })}
        />

        <Input
          style={[styles.input, styles.searchInput]}
          placeholder="Buscar Setor"
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
        <PhotoUpload />
        <Button title="Save" onPress={handleSave} />
      </View>
    </ScrollView>
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
  scrollView: {
    flexGrow: 1,
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5
  },
  camera: {
    flex: 1, 
    height: 100
  }
});

export default NewGood;

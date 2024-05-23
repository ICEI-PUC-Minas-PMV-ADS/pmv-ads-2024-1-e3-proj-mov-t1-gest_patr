import {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import NewGood from '../components/NewGood';

const NewGoodPage = () => {
  const initialData = {
     qrcode: '',
    name: '',
    price: '',
    sector: '',
    date_purchase: '',
    brand: '',
    purchase_site: '',
    warranty: '',
    image: '',
  };

  const currentDate = new Date().toLocaleString();

  const [scannedQRCode, setScannedQRCode] = useState('');

  const handleScanQrCode = (scannedData) => {
    setScannedQRCode(scannedData);
  };

  return (
    <View style={styles.container}>
      <NewGood initialData={initialData} onScanQrCode={handleScanQrCode} />
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
})
export default NewGoodPage;


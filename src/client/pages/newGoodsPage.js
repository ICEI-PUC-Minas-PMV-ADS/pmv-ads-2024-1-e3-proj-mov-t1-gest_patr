import React, { useState } from 'react';
import { View, Text } from 'react-native';
import NewGood from '../components/NewGood';

const NewGoodPage = () => {
  const initialData = {
    name: '',
    marca: '',
    setor: '',
    valor: 0,
    garantia: false,
  };

  const currentDate = new Date().toLocaleString();

  const [scannedQRCode, setScannedQRCode] = useState('');

  const handleScanQrCode = (scannedData) => {
    setScannedQRCode(scannedData);
  };

  return (
    <View>
      <Text>Scanned QR Code: {scannedQRCode}</Text>
      <Text>Date/Time: {currentDate}</Text>
      <NewGood initialData={initialData} onScanQrCode={handleScanQrCode} />
    </View>
  );
};

export default NewGoodPage;

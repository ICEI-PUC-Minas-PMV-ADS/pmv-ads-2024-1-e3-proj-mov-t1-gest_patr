import React, { useState } from 'react';
import { View, Text } from 'react-native';
import NewGood from '../components/NewGood';

const NewGoodPage = () => {
  // Mock data for demonstration
  const initialData = {
    name: '',
    marca: '',
    setor: '',
    valor: 0,
    garantia: false,
  };

  // Mock date/time for demonstration
  const currentDate = new Date().toLocaleString();

  // State to hold the scanned QR code
  const [scannedQRCode, setScannedQRCode] = useState('');

  // Function to handle scanning of QR code
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

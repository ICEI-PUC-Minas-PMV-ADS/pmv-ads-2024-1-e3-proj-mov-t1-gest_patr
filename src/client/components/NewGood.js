import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker 
} from "react-native";

import { Camera } from "expo-camera";
import { CameraView } from "expo-camera/next";
import { getSectors } from "../services/sectorsServices";
import { insertGoods } from "../services/goodsServices";

const NewGood = ({ initialData, onScanQrCode }) => {
  const [data, setData] = useState(initialData);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (scanned) {
      handleScanQrCode();
    }
  }, [scanned]);

  useEffect(() => {
    async function fetchSectors() {
      const sectorsData = await getSectors();
      if (sectorsData) {
        setSectors(sectorsData);
      }
    }

    fetchSectors();
  }, []);

  const handleSave = async () => {
    try {
      const response = await insertGoods(data);
      if (response) {
        console.log("Data saved:", response);
        Alert.alert("Success", "Data saved successfully");
      } else {
        console.error("Failed to save data");
        Alert.alert("Error", "Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      Alert.alert("Error", "Failed to save data");
    }
  };

  const handleScanQrCode = async () => {
    if (hasPermission) {
      setScanned(true);
    } else {
      Alert.alert("Camera permission not granted");
    }
  };

  function toggleCameraType() {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(`Scanned QR code of type ${type} with data: ${data}`);
    onScanQrCode({ type, data });
  };


  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="QR Code"
        value={data.qrcode}
        onChangeText={(text) => setData({ ...data, qrcode: text })}
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
        onChangeText={(text) => setData({ ...data, price: text })}
        keyboardType="numeric"
      />
 <Picker
  style={styles.input}
  selectedValue={data.sector}
  onValueChange={(itemValue, itemIndex) => setData({ ...data, sector: itemValue })}
>
  <Picker.Item label="Selecione setor" value="" />
  {sectors.map((sector, index) => (
    <Picker.Item key={index} label={sector.name} value={sector.name} />
  ))}
</Picker>

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
      {hasPermission ? (
        <View>
          <CameraView 
          style={styles.camera} 
          type={type}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          >
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}
              >
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </View>
          </CameraView>

          <Button
            style={styles.button}
            title="Scan QR Code"
            onScanned={(data) => {
              console.log(data);
            }}
            onPress={handleScanQrCode}
          />
        </View>
      ) : (
        <Text>No access to camera</Text>
      )}
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFF",
    marginBottom: 8,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
export default NewGood;

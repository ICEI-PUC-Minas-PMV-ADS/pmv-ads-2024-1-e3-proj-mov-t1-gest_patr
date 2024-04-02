import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Camera } from "expo-camera";
import { CameraView } from "expo-camera/next";
import { getSectors } from "../services/sectorsServices";

const NewGood = ({ initialData, onScanQrCode }) => {
  const [data, setData] = useState(initialData);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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

  const handleSave = () => {
    // Logic to save the data
    console.log("Saving data:", data);
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
        keyboardType="decimal-pad"
        placeholder="Name"
        value={data.name}
        onChangeText={(text) => setData({ ...data, name: text })}
      />
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="Marca"
        value={data.marca}
        onChangeText={(text) => setData({ ...data, marca: text })}
      />
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="Setor"
        value={data.setor}
        onChangeText={(text) => setData({ ...data, setor: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={data.valor}
        onChangeText={(text) => setData({ ...data, valor: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="Garantia"
        value={data.garantia}
        onChangeText={(text) => setData({ ...data, garantia: text })}
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

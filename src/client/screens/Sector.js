// sectorPage.js
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import SectorsList from "../components/List";
import Button from "../components/Button";
import Input from "../components/Input";
import { getSectors, insertSectors } from "../services/sectorServices";

const SectorPage = () => {
  const [sectors, setSectors] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchSectors = async () => {
    try {
      const sectorsData = await getSectors();
      if (sectorsData && sectorsData.length > 0) {
        setSectors(sectorsData);
      } else {
        console.error("No sectors data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSectors();
  }, []);

  const handleAddSector = () => {
    insertSectors({ name: inputValue })
      .then((res) => {
        if (!res) {
          throw new Error("Network response was not ok");
        }
        fetchSectors();
        setInputValue("");
      })
      .catch((error) => console.error("Error adding sector:", error));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {sectors.map((sector) => (
            <SectorsList
              key={sector.id}
              id={sector.id}
              name={sector.name}
              fetchSectors={fetchSectors}
            />
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <Input
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Adicionar novo setor"
            keyboardType="default"
          />
          <Button onPress={handleAddSector}>Adicionar</Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 0,
    minHeight: "100%",
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default SectorPage;
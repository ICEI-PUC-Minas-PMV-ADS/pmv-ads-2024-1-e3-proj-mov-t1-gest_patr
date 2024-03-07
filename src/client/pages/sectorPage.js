import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import SectorsList from '../components/List';
import Button from '../components/Button';
import Input from '../components/Input';

const SectorPage = () => {
  const [sectors, setSectors] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchSectors();
  }, []);

  const fetchSectors = () => {
    fetch("http://localhost:8081/sectors") 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) { 
          setSectors(data);
        } else {
          console.error("No sectors data found");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleAddSector = () => {
    fetch("http://localhost:8081/sectors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.jYW04zLDHfR1v7xdrW3lCGZrMIsVe0vWCfVkN2DRns2c3MN-mcp_-RE6TN9umSBYoNV-mnb31wFf8iun3fB6aDS6m_OXAiURVEKrPFNGlR38JSHUtsFzqTOj-wFrJZN4RwvZnNGSMvK3wzzUriZqmiNLsG8lktlEn6KA4kYVaM61_NpmPHWAjGExWv7cjHYupcjMSmR8uMTwN5UuAwgW6FRstCJEfoxwb0WKiyoaSlDuIiHZJ0cyGhhEmmAPiCwtPAwGeaL1yZMcp0p82cpTQ5Qb-7CtRov3N4DcOHgWYk6LomPR5j5cCkePAz87duqyzSMpCB0mCOuE3CU2VMtGeQ"

      },
      body: JSON.stringify({ name: inputValue }) // Use the input value here
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      // Fetch sectors again to update the list
      fetchSectors();
      setInputValue(''); // Clear input value after adding sector
    })
    .catch((error) => console.error("Error adding sector:", error));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {sectors.map((sector) => (
            <SectorsList
              key={sector.id}
              name={sector.name}
            />
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <Input
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Enter sector name"
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
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  inputContainer: {
    marginTop: 20,
  },
});

export default SectorPage;

//SectorPage.js
import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const DetailPage = () => {
    const [sectors, setSectors] = React.useState([]);

    React.useEffect(() => {
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
    }, []);
  
      
  return (
    <SafeAreaView>
    <View style={styles.content}>
            {sectors.length === 0 ? (
  <Text>Loading...</Text>
) : (
  <View>
    {sectors.map(sector => (
      <View key={sector.id}>
        <Text>{sector.name}</Text>
        <Text>{sector.price}</Text>
        
      </View>
    ))}
  </View>
)}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#98a9e8",
    },
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    title: {
      fontSize: 20,
      textAlign: "center",
      marginVertical: 8,
      borderColor: "black",
      borderWidth: 1,
      paddingHorizontal: 6,
      backgroundColor: "#c6d0f5",
      color: "black",
      margin: 10,
      borderRadius: 5,
      padding: 10,
    },
    content: {
      flex: 1,
      marginHorizontal: 30,
      justifyContent: "center",
    },
    fixToText: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 2,
      marginVertical: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "white",
    },
    modalContent: {
      backgroundColor: "#98a9e8",
      padding: 30,
      borderRadius: 5,
      marginHorizontal: 5,
      elevation: 5,
    },
    logo: {
      marginLeft: 90,
      width: 150,
      height: 150,
    },
  });
  

export default DetailPage;

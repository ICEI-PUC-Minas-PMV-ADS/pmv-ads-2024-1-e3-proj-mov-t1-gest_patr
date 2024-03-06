
//GoodsPage.js
import React, {useRef} from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import GoodsCard from "../components/Cards";

const GoodsPage = () => {
    const [goods, setGoods] = React.useState([]);
    const anchorRef = useRef(null);

    React.useEffect(() => {
      fetch("http://localhost:8081/goods") 
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          if (data && data.length > 0) { 
            setGoods(data);
          } else {
            console.error("No goods data found");
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
      
  return (
    <SafeAreaView style={styles.container}>
<View style={styles.content}>
    <ScrollView style={styles.scrollViewContent}>
                {/* Render GoodsCard for each item in goods */}
                {goods.map(good => (
                    <GoodsCard key={good.id} name={good.name} price={good.price} />
                ))}
            </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      marginBottom: 20,
    },
    content: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: "center",
      },
    scrollViewContent: {
      flexGrow: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      },

  });
  

export default GoodsPage;

//GoodsPage.js
import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import GoodsCard from "../components/Cards";

const GoodsPage = () => {
  const [goods, setGoods] = React.useState([]);
  const anchorRef = useRef(null);

  React.useEffect(() => {
    fetch("http://localhost:8081/goods")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
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
    <View style={styles.container}>
    <SafeAreaView style={styles.content}>
      <ScrollView style={styles.scrollView}>
        {goods.map((good) => (
          <GoodsCard
            key={good.id}
            name={good.name}
            price={good.price}
            sector={good.sector}
            date_purchase={good.date_purchase}
            brand={good.brand}
            purchase_site={good.purchase_site}
            warranty={good.warranty}
          />
        ))}
      </ScrollView>

    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 0,
    minHeight: "100%",
  },
});

export default GoodsPage;

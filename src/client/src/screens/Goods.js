// GoodsPage.js
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { getGoods } from "../services/goodServices";
import GoodsCard from "../components/Cards";


const GoodsPage = () => {
  const [goods, setGoods] = React.useState([]);
  const anchorRef = useRef(null);

  const fetchGoods = async () => {
    try {
      const goodsData = await getGoods();
      if (goodsData && goodsData.length > 0) {
        setGoods(goodsData);
      } else {
        console.error("No goods data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGoods();
  }, []);

 


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <ScrollView style={styles.scrollView}>
          {goods.map((good) => (
            <GoodsCard
              key={good.id}
              id={good.id}
              qrcode={good.qrcode}
              name={good.name}
              price={good.price}
              sector={good.sector}
              date_purchase={good.date_purchase}
              brand={good.brand}
              purchase_site={good.purchase_site}
              warranty={good.warranty}
              fetchGoods={fetchGoods}
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
  }
});

export default GoodsPage;

//dashsPage.js
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import BarChartComponent from '../components/Barchart.js'


const DashboardPage = () => {
    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.content}>
            <ScrollView style={styles.scrollView}>
            <BarChartComponent/>
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
    },
  });

export default  DashboardPage
    
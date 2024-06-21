import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getGoods } from '../services/goodServices';
import * as Print from 'expo-print';

const Report = () => {
  const [goods, setGoods] = useState([]);
  const [sectorGoodsTotal, setSectorGoodsTotal] = useState({});
  const [nameGoodsTotal, setNameGoodsTotal] = useState({});
  const [totalGoods, setTotalGoods] = useState(0);
  const [overallSum, setOverallSum] = useState(0);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const goodsData = await getGoods();
        setGoods(goodsData);
        calculateTotals(goodsData);
      } catch (error) {
        console.error('Error fetching goods:', error);
      }
    };

    fetchGoods();
  }, []); // Empty dependency array means this effect runs once on mount

  const calculateTotals = (goodsData) => {
    const sectorTotals = {};
    const nameTotals = {};
    let total = 0;
    let sum = 0;

    goodsData.forEach((good) => {
      if (good.sector) {
        sectorTotals[good.sector] = (sectorTotals[good.sector] || 0) + 1;
      }
      if (good.name) {
        nameTotals[good.name] = (nameTotals[good.name] || 0) + 1;
      }
      total++;
      sum += parseFloat(good.price) || 0;
    });

    setSectorGoodsTotal(sectorTotals);
    setNameGoodsTotal(nameTotals);
    setTotalGoods(total);
    setOverallSum(sum);
  };

  const generatePDF = async () => {
    const htmlContent = `
      <h1>Relatório</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Setor</th>
            <th>Total Bens</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(sectorGoodsTotal)
            .map(([sector, total]) => `<tr><td>${sector}</td><td>${total}</td></tr>`)
            .join('')}
        </tbody>
      </table>
      <p>Total Bens: ${totalGoods}</p>
      <p>Valor total: ${overallSum}</p>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      Alert.alert('Sucesso', 'PDF foi gerado');
      console.log('PDF generated:', uri);
    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert('Erro', 'Falha ao gerar PDF');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.generateButton} onPress={generatePDF}>
        <Text style={styles.buttonText}>Gerar PDF do Relatório</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Relatório</Text>
      <Text style={styles.totalText}>Total: {totalGoods}</Text>
      <Text style={styles.totalText}>Total por setor:</Text>
      {Object.entries(sectorGoodsTotal).map(([sector, total]) => (
        <Text key={sector}>{sector}: {total}</Text>
      ))}
      <Text style={styles.totalText}>Total por bem:</Text>
      {Object.entries(nameGoodsTotal).map(([name, total]) => (
        <Text key={name}>{name}: {total}</Text>
      ))}
      <Text style={styles.totalText}>Valor total de bens: R$ {overallSum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  generateButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  totalText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Report;

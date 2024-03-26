import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { getGoods } from '../services/goodsServices';

const BarChartComponent = () => {
  const [goodsData, setGoodsData] = useState([]);
  const [summedData, setSummedData] = useState({});

  useEffect(() => {
    fetchGoodsData();
  }, []);

  const fetchGoodsData = async () => {
    try {
      const data = await getGoods();
      setGoodsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sumGoodsBySector();
  }, [goodsData]);

  const sumGoodsBySector = () => {
    const summed = {};
    goodsData.forEach(good => {
      const sector = good.sector;
      summed[sector] = (summed[sector] || 0) + 1;
    });
    setSummedData(summed);
  };

  return (
    <View>
      <Text >Bens por setor</Text>
      <BarChart
        data={{
          labels: Object.keys(summedData), 
          datasets: [
            {
              data: Object.values(summedData), 
            },
          ],
        }}
        width={400}
        height={220}
        yAxisSuffix=" itens"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
          barPercentage: 0.8, 
          categoryPercentage: 0.8, 
        }}
        vertical 
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default BarChartComponent;

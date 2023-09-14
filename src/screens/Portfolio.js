import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart, PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import ProjectCard from '../components/ProjectCard';
import InvestedProjectCard from '../components/InvestedProjectCard';

currentDate = new Date();

yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

dayBefore = new Date();
dayBefore.setDate(dayBefore.getDate() - 2);

dayBeforeBefore = new Date();
dayBeforeBefore.setDate(dayBeforeBefore.getDate() - 3);

const chartData = {
  labels: ['Invested Value', 'Current Value'],
  datasets: [
    {
      data: [5000, 14000],
    },
  ],
};

const pieData = [
  {
    name: 'Solar',
    population: 1500,
    color: '#ECEE81',
    legendFontColor: '#fff',
    legendFontSize: 15,
  },
  {
    name: 'Wind',
    population: 800,
    color: '#82A0D8',
    legendFontColor: '#fff',
    legendFontSize: 15,
  },
  {
    name: 'Thermal',
    population: 500,
    color: '#FD8A8A',
    legendFontColor: '#fff',
    legendFontSize: 15,
  },
  {
    name: 'Bio',
    population: 300,
    color: '#AEC3AE',
    legendFontColor: '#fff',
    legendFontSize: 15,
  },
  {
    name: 'Hydro',
    population: 1200,
    color: '#B4E4FF',
    legendFontColor: '#fff',
    legendFontSize: 15,
  },
  {
    name: 'Nuclear',
    population: 200,
    color: '#967E76',
    legendFontColor: '#fff',
    legendFontSize: 15,
  },
];

const projects = [
  {
    title: 'Bhadla Solar Park Project',
    content:
      'Plastic recycling is crucial for the well-being of our planet. By recycling plastic, we can reduce the environmental impact of this versatile material. Plastic pollution has become a global crisis, and it is essential to raise awareness about the importance of recycling.',
    location: 'Bhadla, Jodhpur district, Rajasthan',
    runBy:
      'Rajasthan Renewable Energy Corporation Limited (RRECL), a joint venture between the Government of Rajasthan and the Ministry of New and Renewable Energy (MNRE)',
    cost: '18000 Cr (US $2.175 billion)',
    output: '2,245 megawats (MW)',
    date: currentDate,
    returns: '6%',
    // imgs: [
    //   'https://img.freepik.com/free-photo/group-volunteers-collecting-garbage_23-2147807241.jpg?t=st=1688986454~exp=1688987054~hmac=1574857c9581b8deb05a1216f5e00aee6a0bdb9fe3c804998a9b8f8eb01c604d',
    //   'https://img.freepik.com/free-photo/high-angle-plastic-bottle-white-table_23-2149449775.jpg?t=st=1688986454~exp=1688987054~hmac=a6bb8e96bf43fb173d9e459aa81af372e7af3e4c6019e7f0bc6b37a17770a4bb',
    //   'https://img.freepik.com/free-photo/woman-collecting-garbage-black-bag_1150-23963.jpg?w=1380&t=st=1688986771~exp=1688987371~hmac=1db8c6f308c9b64b0ce704956f3b8ea5dd28de47ab37c6bec8c8df761cc60942',
    // ],
  },
  {
    title: 'Pavagada Solar Project (Shakti Sthala)',
    content:
      'Waste can have detrimental environmental impacts, including pollution of air, soil, and water. Improper waste disposal leads to the release of greenhouse gases like methane from landfills. Hazardous waste can contaminate ecosystems and pose risks to human and animal health. Land degradation and deforestation occur due to the expansion of landfill sites. ',
    location: 'Pavagada taluk, Tumkur district, Karnataka',
    runBy:
      'Karnataka Renewable Energy Development Ltd (KREDL) and the Solar Energy Corporation of India (SECI)',
    cost: '₹14,425 Cr',
    output: '2,050 MW',
    date: yesterday,
    returns: '8%',
    // imgs: [
    //   'https://img.freepik.com/free-photo/wheel-loader-transporting-municipal-waste-waste-treatment-plant_181624-57005.jpg?w=996&t=st=1688986871~exp=1688987471~hmac=1b400b238e4bebd11d24c8f78de05179a8cf8478974db161e291dc3f3a5a999a',
    //   'https://img.freepik.com/free-photo/janschwalde-power-plant-germany_181624-50198.jpg?w=996&t=st=1688986909~exp=1688987509~hmac=c24a40402e9130ee872116deb3c0acc33d57d5a1add5215818c0165d26e81f6a',
    //   'https://img.freepik.com/free-photo/ocean-pollution-campaign-with-plastic-bags-used-bottles-floating_53876-104850.jpg?w=996&t=st=1688986951~exp=1688987551~hmac=b70c3942694128e3c62d9749f7a4514f26a195bf8fdf69408abf51a0162c122c',
    // ],
  },
];

const screenWidth = Dimensions.get('window').width;

const Portfolio = () => {
  const theme = useTheme();

  const chartConfig = {
    backgroundGradientFrom: theme.colors.secondary,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: theme.colors.primary,
    backgroundGradientToOpacity: 0.5,
    // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 2,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ScrollView style={styles.container(theme)}>
      <View
        className="m-8 justify-center items-center"
        style={{...styles.shadow}}>
        <BarChart
          style={[styles.graphStyle(theme), {...styles.shadow}]}
          data={chartData}
          width={screenWidth - 25}
          height={220}
          yAxisLabel="₹"
          chartConfig={chartConfig}
          fromZero
          showValuesOnTopOfBars
          withInnerLines={false}
          // verticalLabelRotation={30}
        />
      </View>
      <View className="justify-center items-center">
        <PieChart
          data={pieData}
          width={screenWidth - 10}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          style={{
            backgroundColor: theme.colors.primary,
            borderRadius: 20,
            ...styles.shadow,
          }}
          // center={[10, 50]}
          // absolute
          has
        />
      </View>
      <View style={{marginBottom: '30%'}}>
        <InvestedProjectCard project={projects[0]} />
        <InvestedProjectCard project={projects[1]} />
      </View>
    </ScrollView>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: theme => ({
    height: '100%',
    backgroundColor: theme.colors.secondary,
  }),

  graphStyle: theme => ({
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    color: '#fff',
    padding: 8,
  }),

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

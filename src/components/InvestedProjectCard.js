import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Card, useTheme} from 'react-native-paper';
import {ProgressChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const InvestedProjectCard = ({project}) => {
  const [liked, setLiked] = useState(false);

  const theme = useTheme();

  const progressData = {
    // labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4],
  };

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
    <Card mode="elevated" elevation={3} className="mx-4 my-4">
      <View
        className="rounded-md px-2 absolute z-10 bg-green-200 -top-2 -left-2 border border-green-700"
        style={{...styles.shadow}}>
        <Text
          className="text-sm font-bold"
          style={{color: theme.colors.primary}}>
          ₹2000 Invested
        </Text>
      </View>
      <View
        className="p-6 rounded-lg"
        style={{backgroundColor: theme.colors.primary}}>
        <View className="absolute items-end right-0">
          <TouchableOpacity
            onPress={() => setLiked(!liked)}
            className="bg-green-200 p-1.5 rounded-full -top-2 -right-1.5 border border-green-700"
            style={{...styles.shadow}}>
            {liked ? (
              <Image
                source={require('../assets/icons/like.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: theme.colors.primary,
                }}
              />
            ) : (
              <Image
                source={require('../assets/icons/unlike.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: theme.colors.primary,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text
            className="bg-green-200 text-center py-2 px-4 rounded-full font-bold"
            style={{color: theme.colors.primary}}>
            {project.returns}
          </Text>
          <Text className="text-end py-2 px-4 rounded-full text-sm text-white italic">
            {project.location}
          </Text>
        </View>

        <View className="my-4">
          <Text className="font-extrabold text-xl text-white">
            {project.title}
          </Text>
        </View>

        <View className="my-3">
          <Text className="text-white text-justify">
            <Text className="font-extrabold text-white italic">
              Ownership:{' '}
            </Text>
            {project.runBy}
          </Text>
        </View>

        <View>
          <Text className="font-extrabold text-white mb-4">
            <Text className="font-extrabold italic">Cost: </Text>
            {project.cost}
          </Text>
          <Text className="font-extrabold text-white mb-4">
            <Text className="font-extrabold italic">Output: </Text>
            {project.output}
          </Text>
        </View>

        <View className="justify-between">
          {/* <View
            className="flex-row justify-center mt-4"
            style={{...styles.shadow}}>
          <ProgressChart
              data={progressData}
              width={screenWidth}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={true}
              absolute
              style={{}}
            />
          </View> */}

          <TouchableOpacity
            className="flex-row justify-center mt-4"
            style={{...styles.shadow}}>
            <View
              className="flex-row justify-around items-center p-1.5 rounded-lg px-4"
              style={{backgroundColor: theme.colors.secondary}}>
              <Text
                className="pr-3 text-base font-bold"
                style={{color: theme.colors.primary}}>
                Invest More
              </Text>
              <Image
                source={require('../assets/icons/buy.png')}
                resizeMode="contain"
                className="rounded-lg"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme.colors.primary,
                  padding: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default InvestedProjectCard;

const styles = StyleSheet.create({
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

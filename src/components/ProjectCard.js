import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightBase,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Card, useTheme} from 'react-native-paper';

const ProjectCard = ({project}) => {
  const [liked, setLiked] = useState(false);

  const theme = useTheme();

  return (
    <Card mode="elevated" elevation={3} className="mx-4 my-4">
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

        <TouchableOpacity
          className="flex-row justify-center mt-4"
          style={{...styles.shadow}}>
          <View
            className="flex-row justify-around items-center p-1.5 rounded-lg px-4"
            style={{backgroundColor: theme.colors.secondary}}>
            <Text
              className="pr-3 text-base font-bold"
              style={{color: theme.colors.primary}}>
              Invest
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
    </Card>
  );
};

export default ProjectCard;

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

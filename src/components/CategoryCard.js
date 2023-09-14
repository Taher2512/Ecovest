import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = ({
  logo_uri,
  text,
  bg_uri,
  textColor,
  bg_color,
  project,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Projects', {
          project,
        })
      }
      style={[styles.container(bg_color), styles.shadow]}>
      <ImageBackground
        source={bg_uri}
        resizeMode="cover"
        borderRadius={10}
        // blurRadius={7}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <View style={styles.buttonContainer}>
          <View style={{top: 0}}>
            {/* <Image
              source={require('../assets/icons/invest.png')}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                opacity: 0.6,
              }}
            /> */}
          </View>
          {/* <Text style={styles.text(textColor)}>{text}</Text> */}
          <View
            style={{
              width: '101.3%',
              top: -3,
              height: 30,
              borderRadius: 32,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              backgroundColor: '#558B2F',
              ...styles.shadow,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}>
            {/* <Image
              source={require('../assets/icons/addCategory.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: 'white',
              }}
            /> */}
            <Text
              style={{
                fontWeight: 700,
                color: '#fff',
                fontSize: 15,
              }}>
              {text}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },

  container: bg_color => ({
    width: '43%',
    height: 150,
    margin: 30,
    marginLeft: 20,
    marginRight: 0,
    backgroundColor: bg_color,
    borderRadius: 10,
    borderColor: '#33691E',
    borderWidth: 1,
    borderBottomWidth: 0,
  }),

  buttonContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 25,
  },

  text: textColor => ({
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  }),
});

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
    <View style={[styles.container(bg_color), styles.shadow]}>
      <ImageBackground
        source={bg_uri}
        resizeMode="cover"
        borderRadius={10}
        // blurRadius={7}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Projects', {
              project,
            })
          }
          style={styles.buttonContainer}>
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
              height: 40,
              borderRadius: 32,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              backgroundColor: '#558B2F',
              ...styles.shadow,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
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
                fontSize: 17,
              }}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
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
  }),

  buttonContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 25,
    // borderWidth: 1,
  },

  text: textColor => ({
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  }),
});

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import CategoryCard from '../components/CategoryCard';

const Invest = () => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container(theme)}>
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerText}>Categories</Text>
      </View>
      <View style={{marginBottom: '30%'}}>
        <View style={styles.block}>
          {/* <CategoryCard
            logo_uri={require('../assets/icons/solarIcon.png')}
            bg_uri={require('../assets/backgrounds/solarBackground.jpg')}
            text={'Solar'}
            textColor={'#ffeb3b'}
            navigateText={'newspaper'}
            rate={'14'}
          /> */}
          <CategoryCard
            logo_uri={require('../assets/icons/solarIcon.png')}
            bg_uri={require('../assets/backgrounds/solarBackground.jpg')}
            bg_color={'#fefbd8'}
            text={'Solar'}
            textColor={'#fc9c04'}
            projectCategory={'solar'}
          />
          <CategoryCard
            logo_uri={require('../assets/icons/windIcon.png')}
            bg_uri={require('../assets/backgrounds/windmillBackground.jpg')}
            bg_color={'#e2effb'}
            text={'Wind'}
            textColor={'#4a4778'}
            projectCategory={'wind'}
          />
        </View>
        <View style={styles.block}>
          <CategoryCard
            logo_uri={require('../assets/icons/thermalIcon.png')}
            bg_uri={require('../assets/backgrounds/thermalBackground.jpg')}
            bg_color={'#fadad0'}
            text={'Geo-Thermal'}
            textColor={'#cc340a'}
            projectCategory={'thermal'}
          />
          <CategoryCard
            logo_uri={require('../assets/icons/nuclearIcon.png')}
            bg_uri={require('../assets/backgrounds/nuclearBackground.jpg')}
            bg_color={'#feedcd'}
            text={'Bio-Mass / Bio-Gas'}
            textColor={'#dc8c04'}
            projectCategory={'bio'}
          />
        </View>
        <View style={styles.block}>
          <CategoryCard
            logo_uri={require('../assets/icons/solarIcon.png')}
            bg_uri={require('../assets/backgrounds/solarBackground.jpg')}
            bg_color={'#fefbd8'}
            text={'Hydro Energy'}
            textColor={'#fc9c04'}
            projectCategory={'hydro'}
          />
          <CategoryCard
            logo_uri={require('../assets/icons/windIcon.png')}
            bg_uri={require('../assets/backgrounds/windmillBackground.jpg')}
            bg_color={'#e2effb'}
            text={'Nuclear'}
            textColor={'#4a4778'}
            projectCategory={'nuclear'}
          />
        </View>
        {/* <View style={styles.block}>
          <CategoryCard
            logo_uri={require('../assets/icons/thermalIcon.png')}
            bg_uri={require('../assets/backgrounds/thermalBackground.jpg')}
            bg_color={'#fadad0'}
            text={'Thermal'}
            textColor={'#cc340a'}
            navigateText={'plastic'}
            rate={'10'}
          />
          <CategoryCard
            logo_uri={require('../assets/icons/nuclearIcon.png')}
            bg_uri={require('../assets/backgrounds/nuclearBackground.jpg')}
            bg_color={'#feedcd'}
            text={'Nuclear'}
            textColor={'#dc8c04'}
            navigateText={'cardboard'}
            rate={'5'}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Invest;

const styles = StyleSheet.create({
  container: theme => ({
    height: '100%',
    backgroundColor: theme.colors.secondary,
  }),

  block: {
    flexDirection: 'row',
  },

  header: {
    backgroundColor: '#388E3C',
    alignSelf: 'center',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 35,
    borderWidth: 0.4,
    borderColor: '#388E3C',
    marginTop: 15,
  },

  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },

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

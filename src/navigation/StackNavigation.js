import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import Projects from '../screens/Projects';
// import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const StackNavigation = () => {
  // const userID = useSelector(state => state.user.id);
  // const role = useSelector(state => state.user.role);
  // console.log(role);
  // console.log(role);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: '#f8f8f8'},
        }}
        initialRouteName={'BottomTabs'}>
        <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
        <Stack.Screen name="Projects" component={Projects} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

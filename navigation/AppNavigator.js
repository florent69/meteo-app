import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';
import AddCityScreen from '../screens/AddCityScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';


const AppStack = createBottomTabNavigator(
  { Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: () => { return <Image source={require("../components/images/home.png")} style={{width:30, height:30}}/>}
      },
    }, 
    AddCity: {
      screen: AddCityScreen, 
      navigationOptions: {
        tabBarLabel: "AddCity",
        tabBarIcon: ( ) => { return <Image source={require("../components/images/addCity.png")} style={{width:25, height:25}}/>}
      },
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        tabBarLabel: "Edit",
        tabBarIcon: () => { return <Image source={require("../components/images/edit.png")} style={{width:28, height:28}}/>}
      }, 
    },
  },
  { initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#000',
      labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: '#274288',
    },
    showIcon: true,
    showLabel: true,
  }
}
  );

const AuthStack = createStackNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));
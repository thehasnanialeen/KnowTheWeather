import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './components/MenuScreen';
import WeatherScreen from './components/WeatherScreen';
import images from './assets/images'

export default function App(){
  const WEATHER = [
    {
      city: 'Regina',
      currentTemp: '0',
      oneDayForcast: [],
      tenDayForcast: [],
      sunrise: '6:15 AM',
      sunset: '7:20 PM',
      windSpeed: '25 Km/h',
      humidity: '20%',
      feelsLike: '-5',
      visibility: '16 Km',
      backgroundImage: images.day
    },
    {
      city: 'Toronto',
      currentTemp: '10',
      oneDayForcast: [],
      tenDayForcast: [],
      sunrise: '6:00 AM',
      sunset: '7:12 PM',
      windSpeed: '10 Km/h',
      humidity: '5%',
      feelsLike: '5',
      visibility: '16 Km',
      backgroundImage: images.day
    },
    {
      city: 'Vancouver',
      currentTemp: '12',
      oneDayForcast: [],
      tenDayForcast: [],
      sunrise: '6:13 AM',
      sunset: '7:45 PM',
      windSpeed: '35 Km/h',
      humidity: '60%',
      feelsLike: '0',
      visibility: '10 Km',
      backgroundImage: images.rain
    },
    {
      city: 'Calgary',
      currentTemp: '-7',
      oneDayForcast: [],
      tenDayForcast: [],
      sunrise: '6:43 AM',
      sunset: '6:59 PM',
      windSpeed: '20 Km/h',
      humidity: '34%',
      feelsLike: '-12',
      visibility: '7 Km',
      backgroundImage: images.snowfall
    },
    {
      city: 'Hyderabad',
      currentTemp: '32',
      oneDayForcast: [],
      tenDayForcast: [],
      sunrise: '6:23 AM',
      sunset: '6:31 PM',
      windSpeed: '8 Km/h',
      humidity: '28%',
      feelsLike: '32',
      visibility: '8 Km',
      backgroundImage: images.night
    },
  ]
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WeatherScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WeatherScreen" initialParams={{ cityWeather: WEATHER[0], active: 'Regina'}}>
          {props => <WeatherScreen {...props} WEATHER={WEATHER}/>}
        </Stack.Screen>
        <Stack.Screen name="MenuScreen">
          {props => <MenuScreen {...props} WEATHER={WEATHER}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
  *   file: App.js
  *   author: Aleen Hasnani <ahj126@uregina.ca>
  *   version: 0.1
  *   date-created: Apr-01-2022 
  *   last-modified: Apr-11-2022
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './components/MenuScreen';
import WeatherScreen from './components/WeatherScreen';
import images from './assets/images'

//this is the main function that contains all the screen and calss other screens and components
export default function App(){

  //it contains the hardcode weather data for 5 cities
  const WEATHER = [
    {
      city: 'Regina',
      currentTemp: '0',
      oneDayForcast: [
        {
          time: '1 PM',
          temperature: '0'
        },
        {
          time: '1 PM',
          temperature: '0'
        },
        {
          time: '2 PM',
          temperature: '1'
        },
        {
          time: '3 PM',
          temperature: '2'
        },
        {
          time: '4 PM',
          temperature: '4'
        },
        {
          time: '5 PM',
          temperature: '6'
        },
        {
          time: '6 PM',
          temperature: '5'
        },
        {
          time: '7 PM',
          temperature: '3'
        },
        {
          time: '8 PM',
          temperature: '2'
        },
        {
          time: '9 PM',
          temperature: '2'
        },
        {
          time: '10 PM',
          temperature: '2'
        },
        {
          time: '11 PM',
          temperature: '1'
        },
        {
          time: '12 AM',
          temperature: '1'
        },
        {
          time: '1 AM',
          temperature: '0'
        },
        {
          time: '2 AM',
          temperature: '-1'
        },
        {
          time: '3 AM',
          temperature: '-1'
        },
        {
          time: '4 AM',
          temperature: '-2'
        },
        {
          time: '5 AM',
          temperature: '-4'
        },
        {
          time: '6 AM',
          temperature: '-4'
        },
        {
          time: '7 AM',
          temperature: '-5'
        },
        {
          time: '8 AM',
          temperature: '-4'
        },
        {
          time: '9 AM',
          temperature: '-2'
        },
        {
          time: '10 AM',
          temperature: '-2'
        },
        {
          time: '11 AM',
          temperature: '-3'
        },
        {
          time: '12 PM',
          temperature: '-3'
        },
      ],
      tenDayForcast: [
        {
          day: 'Mon',
          high: '5',
          low: '-2'
        },
        {
          day: 'Tue',
          high: '3',
          low: '-5'
        },
        {
          day: 'Wed',
          high: '10',
          low: '-1'
        },
        {
          day: 'Thu',
          high: '8',
          low: '-5'
        },
        {
          day: 'Fri',
          high: '10',
          low: '1'
        },
        {
          day: 'Sat',
          high: '7',
          low: '-2'
        },
        {
          day: 'Sun',
          high: '12',
          low: '-2'
        },
        {
          day: 'Mon',
          high: '10',
          low: '0'
        },
        {
          day: 'Tue',
          high: '9',
          low: '-3'
        },
        {
          day: 'Wed',
          high: '6',
          low: '-7'
        },
      ],
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
      oneDayForcast: [
        {
          time: '2 PM',
          temperature: '10'
        },
        {
          time: '3 PM',
          temperature: '11'
        },
        {
          time: '4 PM',
          temperature: '11'
        },
        {
          time: '5 PM',
          temperature: '12'
        },
        {
          time: '6 PM',
          temperature: '13'
        },
        {
          time: '7 PM',
          temperature: '12'
        },
        {
          time: '8 PM',
          temperature: '12'
        },
        {
          time: '9 PM',
          temperature: '11'
        },
        {
          time: '10 PM',
          temperature: '10'
        },
        {
          time: '11 PM',
          temperature: '10'
        },
        {
          time: '12 AM',
          temperature: '10'
        },
        {
          time: '1 AM',
          temperature: '9'
        },
        {
          time: '2 AM',
          temperature: '8'
        },
        {
          time: '3 AM',
          temperature: '8'
        },
        {
          time: '4 AM',
          temperature: '7'
        },
        {
          time: '5 AM',
          temperature: '7'
        },
        {
          time: '6 AM',
          temperature: '8'
        },
        {
          time: '7 AM',
          temperature: '8'
        },
        {
          time: '8 AM',
          temperature: '9'
        },
        {
          time: '9 AM',
          temperature: '9'
        },
        {
          time: '10 AM',
          temperature: '9'
        },
        {
          time: '11 AM',
          temperature: '11'
        },
        {
          time: '12 PM',
          temperature: '11'
        },
        {
          time: '1 PM',
          temperature: '12'
        },
      ],
      tenDayForcast: [
        {
          day: 'Mon',
          high: '13',
          low: '6'
        },
        {
          day: 'Tue',
          high: '11',
          low: '6'
        },
        {
          day: 'Wed',
          high: '14',
          low: '8'
        },
        {
          day: 'Thu',
          high: '11',
          low: '5'
        },
        {
          day: 'Fri',
          high: '16',
          low: '10'
        },
        {
          day: 'Sat',
          high: '14',
          low: '5'
        },
        {
          day: 'Sun',
          high: '16',
          low: '9'
        },
        {
          day: 'Mon',
          high: '14',
          low: '7'
        },
        {
          day: 'Tue',
          high: '12',
          low: '8'
        },
        {
          day: 'Wed',
          high: '13',
          low: '5'
        },
      ],
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
      oneDayForcast: [
        {
          time: '12 PM',
          temperature: '12'
        },
        {
          time: '1 PM',
          temperature: '13'
        },
        {
          time: '2 PM',
          temperature: '13'
        },
        {
          time: '3 PM',
          temperature: '14'
        },
        {
          time: '4 PM',
          temperature: '15'
        },
        {
          time: '5 PM',
          temperature: '15'
        },
        {
          time: '6 PM',
          temperature: '13'
        },
        {
          time: '7 PM',
          temperature: '13'
        },
        {
          time: '8 PM',
          temperature: '11'
        },
        {
          time: '9 PM',
          temperature: '10'
        },
        {
          time: '10 PM',
          temperature: '8'
        },
        {
          time: '11 PM',
          temperature: '8'
        },
        {
          time: '12 AM',
          temperature: '7'
        },
        {
          time: '1 AM',
          temperature: '7'
        },
        {
          time: '2 AM',
          temperature: '8'
        },
        {
          time: '3 AM',
          temperature: '8'
        },
        {
          time: '4 AM',
          temperature: '7'
        },
        {
          time: '5 AM',
          temperature: '7'
        },
        {
          time: '6 AM',
          temperature: '8'
        },
        {
          time: '7 AM',
          temperature: '8'
        },
        {
          time: '8 AM',
          temperature: '9'
        },
        {
          time: '9 AM',
          temperature: '9'
        },
        {
          time: '10 AM',
          temperature: '10'
        },
        {
          time: '11 AM',
          temperature: '11'
        },
      ],
      tenDayForcast: [
        {
          day: 'Mon',
          high: '15',
          low: '9'
        },
        {
          day: 'Tue',
          high: '14',
          low: '7'
        },
        {
          day: 'Wed',
          high: '18',
          low: '10'
        },
        {
          day: 'Thu',
          high: '16',
          low: '10'
        },
        {
          day: 'Fri',
          high: '13',
          low: '6'
        },
        {
          day: 'Sat',
          high: '15',
          low: '9'
        },
        {
          day: 'Sun',
          high: '17',
          low: '8'
        },
        {
          day: 'Mon',
          high: '15',
          low: '7'
        },
        {
          day: 'Tue',
          high: '12',
          low: '5'
        },
        {
          day: 'Wed',
          high: '13',
          low: '8'
        },
      ],
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
      oneDayForcast: [
        {
          time: '1 PM',
          temperature: '-8'
        },
        {
          time: '2 PM',
          temperature: '-10'
        },
        {
          time: '3 PM',
          temperature: '-9'
        },
        {
          time: '4 PM',
          temperature: '-8'
        },
        {
          time: '5 PM',
          temperature: '-6'
        },
        {
          time: '6 PM',
          temperature: '-5'
        },
        {
          time: '7 PM',
          temperature: '-6'
        },
        {
          time: '8 PM',
          temperature: '-6'
        },
        {
          time: '9 PM',
          temperature: '-7'
        },
        {
          time: '10 PM',
          temperature: '-9'
        },
        {
          time: '11 PM',
          temperature: '-11'
        },
        {
          time: '12 AM',
          temperature: '-12'
        },
        {
          time: '1 AM',
          temperature: '-12'
        },
        {
          time: '2 AM',
          temperature: '-13'
        },
        {
          time: '3 AM',
          temperature: '-11'
        },
        {
          time: '4 AM',
          temperature: '-11'
        },
        {
          time: '5 AM',
          temperature: '-12'
        },
        {
          time: '6 AM',
          temperature: '-12'
        },
        {
          time: '7 AM',
          temperature: '-13'
        },
        {
          time: '8 AM',
          temperature: '-12'
        },
        {
          time: '9 AM',
          temperature: '-11'
        },
        {
          time: '10 AM',
          temperature: '-10'
        },
        {
          time: '11 AM',
          temperature: '-8'
        },
        {
          time: '12 PM',
          temperature: '-6'
        },
      ],
      tenDayForcast: [
        {
          day: 'Mon',
          high: '-5',
          low: '-14'
        },
        {
          day: 'Tue',
          high: '-2',
          low: '-10'
        },
        {
          day: 'Wed',
          high: '0',
          low: '-15'
        },
        {
          day: 'Thu',
          high: '2',
          low: '-8'
        },
        {
          day: 'Fri',
          high: '0',
          low: '-11'
        },
        {
          day: 'Sat',
          high: '1',
          low: '-9'
        },
        {
          day: 'Sun',
          high: '-3',
          low: '-15'
        },
        {
          day: 'Mon',
          high: '-1',
          low: '-10'
        },
        {
          day: 'Tue',
          high: '2',
          low: '-5'
        },
        {
          day: 'Wed',
          high: '0',
          low: '-7'
        },
      ],
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
      currentTemp: '25',
      oneDayForcast: [
        {
          time: '1 AM',
          temperature: '25'
        },
        {
          time: '2 AM',
          temperature: '24'
        },
        {
          time: '3 AM',
          temperature: '24'
        },
        {
          time: '4 AM',
          temperature: '24'
        },
        {
          time: '5 AM',
          temperature: '25'
        },
        {
          time: '6 AM',
          temperature: '26'
        },
        {
          time: '7 AM',
          temperature: '26'
        },
        {
          time: '8 AM',
          temperature: '27'
        },
        {
          time: '9 AM',
          temperature: '27'
        },
        {
          time: '10 AM',
          temperature: '28'
        },
        {
          time: '11 AM',
          temperature: '29'
        },
        {
          time: '12 PM',
          temperature: '30'
        },
        {
          time: '1 PM',
          temperature: '30'
        },
        {
          time: '2 PM',
          temperature: '32'
        },
        {
          time: '3 PM',
          temperature: '32'
        },
        {
          time: '4 PM',
          temperature: '32'
        },
        {
          time: '5 PM',
          temperature: '31'
        },
        {
          time: '6 PM',
          temperature: '31'
        },
        {
          time: '7 PM',
          temperature: '30'
        },
        {
          time: '8 PM',
          temperature: '29'
        },
        {
          time: '9 PM',
          temperature: '29'
        },
        {
          time: '10 PM',
          temperature: '29'
        },
        {
          time: '11 PM',
          temperature: '28'
        },
        {
          time: '12 AM',
          temperature: '27'
        },
      ],
      tenDayForcast: [
        {
          day: 'Mon',
          high: '32',
          low: '25'
        },
        {
          day: 'Tue',
          high: '33',
          low: '27'
        },
        {
          day: 'Wed',
          high: '31',
          low: '25'
        },
        {
          day: 'Thu',
          high: '30',
          low: '26'
        },
        {
          day: 'Fri',
          high: '32',
          low: '24'
        },
        {
          day: 'Sat',
          high: '33',
          low: '27'
        },
        {
          day: 'Sun',
          high: '33',
          low: '28'
        },
        {
          day: 'Mon',
          high: '32',
          low: '24'
        },
        {
          day: 'Tue',
          high: '31',
          low: '26'
        },
        {
          day: 'Wed',
          high: '32',
          low: '23'
        },
      ],
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
      {/**
        * Stack.Navigator
        * Purpose: has a stack of all the screens and contols the navigation between them
        * Prop(s):
        * <1> initialRouteName
        * <2> screenOptions 
        */}
      <Stack.Navigator
        initialRouteName="WeatherScreen"
        screenOptions={{ headerShown: false }}>

        {/**
          * Stack.Screen
          * Purpose: contains the screen component
          * Prop(s):
          * <1> name
          * <2> initialParams
          */}
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

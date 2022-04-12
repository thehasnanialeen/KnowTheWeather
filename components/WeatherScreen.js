import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import Header from './Header';
import MainScreen from './MainScreen';

export default function WeatherScreen({ navigation, route }) {
  return (
    <ImageBackground
      source={route.params.cityWeather.backgroundImage}
      resizeMode="cover"
      style={{ flex: 1 }}>
      <Header navigation={navigation} toScreen={'MenuScreen'} />
      <ScrollView
        bounces={false}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <MainScreen params={route.params.cityWeather} />
      </ScrollView>
    </ImageBackground>
  );
}

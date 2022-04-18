import React from 'react';
import {
  ImageBackground,
  ScrollView,
} from 'react-native';
import Header from './Header';
import MainScreen from './MainScreen';

export default function WeatherScreen({ navigation, route }) {
  return (
    <ImageBackground
      source={route.params.cityWeather.backgroundImage}
      resizeMode="cover"
      style={{ flex: 1 }}>
      {/**
      * Header
      * Purpose: calling the custom component created in header.js 
      * Prop(s):
      * <1> navigation
      * <2> toScreen
      */}
      <Header navigation={navigation} toScreen={'MenuScreen'} />

      {/**
      * ScrollView
      * Purpose: this a scrollable section that shows all the weather data
      * Prop(s):
      * <1> bounces
      * <2> scrollEnabled
      * <3> showsVerticalScrollIndicator
      */}
      <ScrollView
        bounces={false}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <MainScreen params={route.params.cityWeather} />
      </ScrollView>
    </ImageBackground>
  );
}

import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import MenuScreen from './MenuScreen';

export default function Header({ navigation, toScreen, active }) {
  
  //this function sets the background color of the status bar in ios and android
  //this function was referenced from stackOverflow 
  const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{ backgroundColor }}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

  return (
    <View>
    {/**
      * MyStatusBar
      * Purpose: custom component that sets the bCKGROUND COLOR OF THE STATUSBAR
      * Prop(s):
      * <1> backgroundColor
      * <2> barStyle
      */}
    <MyStatusBar backgroundColor='rgba(255,255,255,0.5)' barStyle="dark-content" />
    {/**
      * Appbar.Header
      * Purpose: creates the header for the app
      * Prop(s):
      * <1> dark
      * <2> Style
      */}
      <Appbar.Header
        dark={false}
        style={{ backgroundColor: 'rgba(255,255,255,0.3)', elevation: 0 }}>

        {/**
        * Appbar.Action
        * Purpose: creates the hamburger icon which takes to the menuScreen/weatherscreen when pressed
        * Prop(s):
        * <1> icon
        * <2> onPress
        */}
        <Appbar.Action
          icon="menu"
          onPress={() => {toScreen == 'MenuScreen' ? navigation.navigate(toScreen) : navigation.goBack()}}
        />
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', fontSize: 25}}>Know The Weather</Text>
        </View>
      </Appbar.Header>
    </View>
  );
}

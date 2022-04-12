import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import MenuScreen from './MenuScreen';

export default function Header({ navigation, toScreen, active }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{ backgroundColor }}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

  return (
    <View>
    <MyStatusBar backgroundColor='rgba(255,255,255,0.5)' barStyle="dark-content" />
      <Appbar.Header
        dark={false}
        style={{ backgroundColor: 'rgba(255,255,255,0.3)', elevation: 0 }}>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.navigate(toScreen, {active: 'Regina'})}
        />
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', fontSize: 25}}>Know The Weather</Text>
        </View>
      </Appbar.Header>
    </View>
  );
}

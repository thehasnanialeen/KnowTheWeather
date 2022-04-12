import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import Header from './Header';

var active = 'Regina'

export default function MenuScreen({ navigation, route, WEATHER }) {
  return (
    <View style={{ backgroundColor: '#0b254f' }}>
      <Header navigation={navigation} toScreen={'WeatherScreen'} />
      <List.Section
        style={styles.menu}
        title="Cities"
        titleStyle={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
        <View style={{ marginLeft: 20 }}>
          <List.Item
            title="Regina"
            titleStyle={styles.listName}
            style={{
              backgroundColor:
                active == 'Regina'
                  ? 'rgba(255,255,255,0.5)'
                  : 'transparent',
              borderRadius: 5,
            }}
            onPress={() => {
              [
                active = 'Regina',
                navigation.navigate('WeatherScreen', {
                  cityWeather: WEATHER[0]
                }),
              ];
            }}
          />
          <List.Item
            title="Toronto"
            titleStyle={[styles.listName]}
            style={{
              backgroundColor:
                active == 'Toronto'
                  ? 'rgba(255,255,255,0.5)'
                  : 'transparent',
              borderRadius: 5,
            }}
            onPress={() => {
              [
                active = 'Toronto',
                navigation.navigate('WeatherScreen', {
                  cityWeather: WEATHER[1],
                })
              ];
            }}
          />
          <List.Item
            title="Hyderabad"
            titleStyle={[styles.listName]}
            style={{
              backgroundColor:
                active == 'Hyderabad'
                  ? 'rgba(255,255,255,0.5)'
                  : 'transparent',
              borderRadius: 5,
            }}
            onPress={() => {
              active = 'Hyderabad',
                navigation.navigate('WeatherScreen', {
                  cityWeather: WEATHER[4],
                });
            }}
          />
          <List.Item
            title="Vancouver"
            titleStyle={[styles.listName]}
            style={{
              backgroundColor:
                active == 'Vancouver'
                  ? 'rgba(255,255,255,0.5)'
                  : 'transparent',
              borderRadius: 5,
            }}
            onPress={() => {
              active = 'Vancouver',
                navigation.navigate('WeatherScreen', {
                  cityWeather: WEATHER[2],
                });
            }}
          />
          <List.Item
            title="Calgary"
            titleStyle={[styles.listName]}
            style={{
              backgroundColor:
                active == 'Calgary'
                  ? 'rgba(255,255,255,0.5)'
                  : 'transparent',
              borderRadius: 5,
            }}
            onPress={() => {
              active = 'Calgary',
                navigation.navigate('WeatherScreen', {
                  cityWeather: WEATHER[3],
                });
            }}
          />
        </View>
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginHorizontal: 10,
    height: '100%',
    zIndex: 10,
  },
  listName: {
    color: 'white',
  },
});

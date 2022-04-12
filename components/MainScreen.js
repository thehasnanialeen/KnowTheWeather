import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function MainScreen({ params }) {
  const DATA = [];
  for (let i = 0; i < 24; i++) {
    const items = {};
    items['id'] = { i };
    items['time'] = i + ' AM';
    items['temperature'] = Math.floor(Math.random() * 5) + '°';
    DATA.push(items);
  }

  const oneDayTemp = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.time}</Text>
      <Text style={styles.title}>{item.temperature}</Text>
    </View>
  );

  const OTHERDATA = [
    {
      id: 1,
      title: 'Sunrise',
      value: params.sunrise,
    },
    {
      id: 2,
      title: 'Sunset',
      value: params.sunset,
    },
    {
      id: 3,
      title: 'Wind Speed',
      value: params.windSpeed,
    },
    {
      id: 4,
      title: 'Humidity',
      value: params.humidity,
    },
    {
      id: 5,
      title: 'Feels Like',
      value: params.feelsLike,
    },
    {
      id: 6,
      title: 'Visibility',
      value: params.visibility,
    },
  ];
  const otherData = ({ item }) => (
    <View style={[styles.cards, styles.smallCards]}>
      <Text style={styles.cardHead}>{item.title}</Text>
      <Text style={styles.cardContent}>{item.value}</Text>
    </View>
  );

  const TENDAY = [
    {
      day: 'Mon',
      high: '5',
      low: '-2',
    },
    {
      day: 'Tue',
      high: '3',
      low: '-5',
    },
    {
      day: 'Wed',
      high: '10',
      low: '-1',
    },
    {
      day: 'Thu',
      high: '8',
      low: '-2',
    },
    {
      day: 'Fri',
      high: '11',
      low: '-2',
    },
    {
      day: 'Sat',
      high: '9',
      low: '-5',
    },
    {
      day: 'Sun',
      high: '5',
      low: '-10',
    },
    {
      day: 'Mon',
      high: '7',
      low: '-2',
    },
    {
      day: 'Tue',
      high: '6',
      low: '0',
    },
    {
      day: 'Wed',
      high: '9',
      low: '-2',
    },
  ];
  const tenDay = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.day}</Text>
      <Text style={styles.title}>
        H:{item.high}° L:{item.low}°
      </Text>
    </View>
  );
  return (
    <View style={styles.backgroundOpacity}>
      <View style={styles.currentTemperature}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
          {params.city}
        </Text>
        <Text style={{ fontSize: 70, margin: 20, color: 'white' }}>
          {params.currentTemp}°C
        </Text>
      </View>
      <View style={styles.cards}>
        <Text style={{ color: 'white', margin: 10, marginBottom: 5 }}>
          24 Hour Forcast
        </Text>
        <View
          style={{ borderBottomColor: 'white', borderBottomWidth: 0.5 }}></View>
        <FlatList
          data={DATA}
          renderItem={oneDayTemp}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.cards}>
        <Text style={{ color: 'white', margin: 10, marginBottom: 5 }}>
          10 Day Forcast
        </Text>
        <View
          style={{ borderBottomColor: 'white', borderBottomWidth: 0.5 }}></View>
        <FlatList
          data={TENDAY}
          renderItem={tenDay}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={OTHERDATA}
        renderItem={otherData}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  currentTemperature: {
    padding: 22,
    alignItems: 'center',
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 4,
  },
  cards: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    marginHorizontal: 15,
    marginBottom: 25,
    borderRadius: 15,
  },
  smallCards: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '40%',
    height: 100,
  },
  cardHead: {
    fontSize: 15,
    color: 'white',
    marginVertical: 5,
  },
  cardContent: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
});

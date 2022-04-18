import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default function MainScreen({ params }) {

    /**
   * oneDayTemp
   * Purpose: it renders and styles data in a list which has the hourly temp for the 24 hours
   * 
   * Parameter(s): item (json data)
   *  
   * Precondition(s): 
   * <1> a json data should be passed
   * 
   * Returns: N/A
   * 
   * Side effect:
   * <1> new data will be added on the screen
   * 
   */
  const oneDayTemp = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.time}</Text>
      <Text style={styles.title}>{item.temperature}</Text>
    </View>
  );

   /**
   * tenDay
   * Purpose: it renders and styles data in a list which has the daily high and low temp for the 10 days
   * 
   * Parameter(s): item (json data)
   *  
   * Precondition(s): 
   * <1> a json data should be passed
   * 
   * Returns: N/A
   * 
   * Side effect:
   * <1> new data will be added on the screen
   * 
   */
  const tenDay = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.day}</Text>
      <Text style={styles.title}>
        H:{item.high}° L:{item.low}°
      </Text>
    </View>
  );

  //an array that contains remaning weather conditions information 
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

  /**
   * otherData
   * Purpose: it renders and styles data in a list in the form of cards which has weather conditions information
   * 
   * Parameter(s): item (json data)
   *  
   * Precondition(s): 
   * <1> a json data should be passed
   * 
   * Returns: N/A
   * 
   * Side effect:
   * <1> new data/card will be added on the screen
   * 
   */
  const otherData = ({ item }) => (
    <View style={[styles.cards, styles.smallCards]}>
      <Text style={styles.cardHead}>{item.title}</Text>
      <Text style={styles.cardContent}>{item.value}</Text>
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
          24 Hour Forecast
        </Text>
        <View
          style={{ borderBottomColor: 'white', borderBottomWidth: 0.5 }}></View>
        {/**
        * FlatList
        * Purpose: creates a list of time and temp for the next 24 hrs
        * Prop(s):
        * <1> data
        * <2> renderItem
        * <3> keyExtractor
        * <4> horizontal
        * <5> showsHorizontalScrollIndicator
        */}
        <FlatList
          data={params.oneDayForcast}
          renderItem={oneDayTemp}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.cards}>
        <Text style={{ color: 'white', margin: 10, marginBottom: 5 }}>
          10 Day Forecast
        </Text>
        <View
          style={{ borderBottomColor: 'white', borderBottomWidth: 0.5 }}></View>

        {/**
        * FlatList
        * Purpose: creates a list of day, high and low temp for the next 10 days
        * Prop(s):
        * <1> data
        * <2> renderItem
        * <3> keyExtractor
        * <4> horizontal
        * <5> showsHorizontalScrollIndicator
        */}
        <FlatList
          data={params.tenDayForcast}
          renderItem={tenDay}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/**
        * FlatList
        * Purpose: creates a list of weather conditions other than 24 hrs and 10 dat forecast
        * Prop(s):
        * <1> data
        * <2> renderItem
        * <3> numColumns
        * <4> columnWrapperStyle
        * <5> scrollEnabled
        */}
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

//sttylesheet to style the data on the screen
const styles = StyleSheet.create({
  //adds a light dark color on top of the background image
  backgroundOpacity: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  //styling for the currentTemperature
  currentTemperature: {
    padding: 22,
    alignItems: 'center',
  },
  //
  item: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  //styling for the time, temp, day for the 24 hr and 10 day forecast
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 4,
  },
  //overall styling for all cards
  cards: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    marginHorizontal: 15,
    marginBottom: 25,
    borderRadius: 15,
  },
  //styling for the small cards (other weather conditions)
  smallCards: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '40%',
    height: 100,
  },
  //styling for the titles in small cards (other weather conditions)
  cardHead: {
    fontSize: 15,
    color: 'white',
    marginVertical: 5,
  },
  //styling for the values in small cards (other weather conditions)
  cardContent: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
});

# Know The Weather

I have been learning React Native for a few months and thought of implementing my newly learned knowledge. Know The Weather is a basic weather forecast app that shows the temperature and weather conditions of 5 cities (Regina, Vancouver, Toronto, Calgary, and Hyderabad). Know the current temperature, hourly forecast for the next 24 hours, 10-day forecast, and other weather conditions. At present all the app data is hard-coded and not actual.

<img src="https://github.com/thehasnanialeen/KnowTheWeather/blob/master/assets/HomScreen1.jpg" width="200" height="400" /> <img src="https://github.com/thehasnanialeen/KnowTheWeather/blob/master/assets/MenuScreen.jpg" width="200" height="400" /> <img src="https://github.com/thehasnanialeen/KnowTheWeather/blob/master/assets/HomeScreen3.jpg" width="200" height="400" /> <img src="https://github.com/thehasnanialeen/KnowTheWeather/blob/master/assets/HomeScreen5.jpg" width="200" height="400" />  


## Manifest

- assets -----------> This folder contains all the images used in the app
- components ----> This folder contains the .js files for all screens and components used in the app
- app.js -----------> This file has the stack navigator used to navigate between screens. It also has the hard-coded data for all cities
- README.md ----> This markdown file you are reading.
- package.json ---> This file has all the dependencies required for the app  


## Installation
### Prerequisites

To run this project in the development mode, you'll need to have a basic environment to run a React-Native App, which can be found [here](https://facebook.github.io/react-native/docs/getting-started).

### Installing

1. Clone the repo
     ```bash
    git clone https://github.com/thehasnanialeen/KnowTheWeather.git
    cd /KnowTheWeather
    ```
2. Run either `$ yarn install` or `$ npm install`

### Running

With all dependencies installed and the environment properly configured, you can now run the app:

Android: `$ react-native run-android`

IOS: `$ react-native run-ios`


## Features

The app shows the weather conditions of 5 cities:

1. Regina, Saskatchewan, Canada. 
2. Toronto, Ontario, Canada.
3. Vancouver, British Columbia, Canada.
4. Calgary, Alberta, Canada.
5. Hyderabad, Telangana, India.

_All the data is hard-coded and not real._

#### The app has 2 screens:

### Home Screen

The Background in this screen will depict the current weather condition like day, night, snowfall, rain, etc.
     
This screen has the following weather conditions shown:
- Name of the city
- Current Temperature
- Hourly temperature for the next 24 hours (Scroll to the right of the box)
- Daily High and Low temperature for the next 10 days (Scroll to the right of the box)
- Sunrise and Sunset time
- Current Wind Speed
- Current Humidity
- Current Feels Like Temperature
- Current Visibility
     
_All the temperatues shown in this screen are in celcius._
    
Pressing the hamburger icon on the top left-hand corner will take you to a different screen where you will have the option to select a city whose weather you want to see.

<img src="https://github.com/thehasnanialeen/KnowTheWeather/blob/master/assets/HomScreen1.jpg" width="190" height="400" /> <img src="https://github.com/thehasnanialeen/KnowTheWeather/blob/master/assets/HomeScreen2.jpg" width="190" height="400" />

### List of Cities Screen

This screen will have a list of 5 cities to choose from, which are: Regina, Toronto, Vancouver, Calgary, and Hyderabad. The city whose weather is currenly being shown will be highlighted.
     
When you press on a particular city, you will be directed back to the Home Screen where the weather for that city will be shown.
   
<img src="https://github.com/thehasnanialeen/KnowTheWeather/blob/master/assets/MenuScreen.jpg" width="190" height="400"/>


## Support

If you have questions or would like to send some enhancements tips, feel free to contact me

Email: [ahj126@uregina.ca](ahj126@uregina.ca) 


## Future Work

I plan to further develop this project and make it an actual working weather app where users can add cities of their choice and know the accurate weather conditions of that city.

## Credits

- [React-Native's](https://reactnative.dev/docs/components-and-apis) and [React-Native-Paper's](https://callstack.github.io/react-native-paper/index.html) components and documentations were used to build this project.
- The images used in this project were taken from Google Images


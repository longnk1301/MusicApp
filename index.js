/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import {createStackNavigator} from 'react-navigation';

import Player from './components/Player';
import AllPlayList from './components/AllPlayList';
import Lyrics from './components/Lyrics';

import { AllPlayListScreen, PlayerScreen, LyricsScreen } from './screenNames';

const App = createStackNavigator({
    AllPlayListScreen: {
        screen: AllPlayList,
        navigationOptions: {
            headerTitle: 'All PLaylist',
        },
    },
    PlayerScreen: {
        screen: Player,
        navigationOptions: {
            headerTitle: 'My Music',
        },
    },
    LyricsScreen: {
        screen: Lyrics,
    },
});

AppRegistry.registerComponent(appName, () => App);

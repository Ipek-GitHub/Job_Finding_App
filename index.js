/**
 * @format
 */

import 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
